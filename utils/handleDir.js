import fs from 'node:fs/promises'

export default function createDir() {

    fs.mkdir(`${process.cwd()}/Logs`)
        .then(() => console.log('Directorio creado con exito'))
        .catch((err) => console.log('Error a la hora de crear el direactorio' + err))
}