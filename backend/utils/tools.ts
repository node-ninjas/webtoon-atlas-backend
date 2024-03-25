import fs from 'fs'
import { Response } from 'express'

export const readJsonFile = (filePath: string) => {
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const jsonObject = JSON.parse(jsonData)
    return jsonObject
}

export const extractPortNumber = (text: string) => {
    const regex = /(\d+)/
    const match = text.match(regex)
    return match ? parseInt(match[0], 10) : 0
}

export const clearConsole = () => {
    process.stdout.write('\x1Bc')
}

export const handleError = (res: Response, error: any) => {
    return res.status(500).json(error)
}

// TODO: Add interface for this function including everything that is in user. e.g interface user { firstName: string, lastName: string etc.}
export const getCurrentUserFromUser = (user: any) => {
    return {
        fullName: `${user.firstName} ${user.lastName}`,
        accessGroups: user.accessGroups,
    }
}
