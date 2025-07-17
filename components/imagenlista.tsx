/* eslint-disable @next/next/no-img-element */

import Reproductor from "./reproductor";

const ImagenLista = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    <div className="md:col-span-2">
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                “Nacer sabiendo”
                            </h2>
                        </div>

                        <div className="max-w-lg md:max-w-none">
                            <p className="mt-4 text-gray-700">
                                “Al nacer lloramos porque entramos a este vasto manicomio”, escribió Shakespeare.
                                Y tal vez tenía razón. Tal vez el primer llanto no es solo instinto, sino una respuesta del alma al abrir los ojos por primera vez a un mundo lleno de caos, estructuras injustas y corazones rotos.
                                Lloramos porque sentimos. Porque nacemos sabiendo, aunque no entendamos aún con palabras, que este mundo —hermoso pero incompleto— nos va a doler.
                                Ese llanto es el primer acto humano, pero también el más sincero.
                                No es debilidad: es conciencia.
                            </p>
                        </div>
                    </div>


                    <div className="md:col-span-2 my-4">
                        <img
                            src="/imagen1.jpg"
                            className="rounded w-full max-w-md mx-auto"
                            alt="Imagen ilustrativa del texto"
                        />
                    </div>


                </div>

                <Reproductor />

                <div className="mt-4 text-center">
                    <div className="inline-block px-6 py-4 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-800">Información</h3>
                        <div className="mt-2 text-sm text-gray-600">
                            <p><strong>Nombre: Camila Riera</strong></p>
                            <p>Carrera: Artes, mención Diseño Gráfico</p>
                            <p>Materia: Sociología del arte y del diseño</p>
                            <p>Fecha: Julio de 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImagenLista;