import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    // Initialize properties
    viewModel.edad = "";
    viewModel.cuotasTotales = "";
    viewModel.cuotasRecientes = "";
    viewModel.pensionMensual = "";
    viewModel.resultadoVisible = false;
    viewModel.mensajeResultado = "";
    viewModel.montoIndemnizacion = "";

    viewModel.calcularIndemnizacion = () => {
        const edad = parseInt(viewModel.edad);
        const cuotasTotales = parseInt(viewModel.cuotasTotales);
        const cuotasRecientes = parseInt(viewModel.cuotasRecientes);
        const pensionMensual = parseFloat(viewModel.pensionMensual);

        let cumpleCondiciones = false;
        let mensaje = "";

        // Validar datos
        if (isNaN(edad) || isNaN(cuotasTotales) || isNaN(cuotasRecientes) || isNaN(pensionMensual)) {
            mensaje = "Por favor, complete todos los campos con valores numéricos válidos.";
        } else {
            // Verificar condiciones según la edad
            if (edad <= 30 && cuotasTotales < 36 && cuotasRecientes >= 6) {
                cumpleCondiciones = true;
            } else if (edad > 30 && edad <= 40 && cuotasTotales < 48 && cuotasRecientes >= 8) {
                cumpleCondiciones = true;
            } else if (edad > 40 && cuotasTotales < 60 && cuotasRecientes >= 10) {
                cumpleCondiciones = true;
            }

            if (cumpleCondiciones) {
                // Calcular indemnización: una mensualidad por cada 6 meses de cotizaciones
                const mensualidades = Math.floor(cuotasTotales / 6);
                const montoTotal = mensualidades * pensionMensual;
                
                mensaje = "Califica para indemnización por invalidez.";
                viewModel.set("montoIndemnizacion", `Monto de indemnización: B/. ${montoTotal.toFixed(2)}`);
            } else {
                mensaje = "No cumple con las condiciones para recibir la indemnización por invalidez.";
                viewModel.set("montoIndemnizacion", "");
            }
        }

        viewModel.set("mensajeResultado", mensaje);
        viewModel.set("resultadoVisible", true);
    };

    return viewModel;
}