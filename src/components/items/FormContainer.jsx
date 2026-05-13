import react, { useState } from 'react';
import { FormularioProducto } from './FormularioProducto.jsx';

export default function FormContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
    });
    const [imagenFile, setImagenFile] = useState(null);
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm ({...datosForm,
            [name]: value 
        });
    };
    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
        console.log('Archivo seleccionado:', evento.target.files[0]);
    }
    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        if (!imagenFile) {
            alert('Por favor, selecciona una imagen del producto.');
            return;
        }
        //console.log('Enviando los siguientes datos a la API:', datosForm);
        // --- Lógica para subir la imagen a Imgbb ---
        const apiKey = 'c15d05d9e378af5047cb1f8a8c18bb94'; // 🚨 ¡Reemplazá esto con tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);

        try {
            console.log('Subiendo imagen a Imgbb...');
            const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, 
            {
                method: 'POST',
                body: formData,
            });
    
            const datosImgbb = await respuestaImgbb.json();

            if (datosImgbb.success) {;
                console.log('¡Imagen subida con éxito! URL:', datosImgbb.data.url);
                // Aquí podrías agregar el URL de la imagen a los datos del producto antes de enviarlos a tu API.
            
                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
                console.log('Enviando producto completo a la API:', productoCompleto);
            } else {
                throw new Error ('Error al subir la imagen a Imgbb');
            }

        } catch (error) {
        console.error('¡Ups! Hubo un error al subir la imagen:', error);
        alert('No se pudo subir la imagen. Por favor, intentá de nuevo.');
        }
        };

    return (
        <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        />
    );
}
