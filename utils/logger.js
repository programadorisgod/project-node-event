import writeFileLog from "./handleFileLogger.js";

export function logger(message) {
    writeFileLog(message)
}