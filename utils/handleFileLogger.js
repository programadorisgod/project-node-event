import fs from 'node:fs/promises'
import createDir from './handleDir.js'

export default function writeFileLog(message) {
    createDir()
    fs.appendFile('./Logs/log.txt', message, { encoding: 'utf-8' })
        .then(() => console.log('log registrado con exito'))
        .catch((err) => console.log('Ocurrió un error a la hora de registrar el log'))
}