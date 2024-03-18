import fs from "fs";
import express from "express";

export const readJsonFile = (filePath) => {
	const jsonData = fs.readFileSync(filePath, "utf8");
	const jsonObject = JSON.parse(jsonData);
	return jsonObject;
};

export const extractPortNumber = (text) => {
	const regex = /(\d+)/;
	const match = text.match(regex);
	return match ? parseInt(match[0], 10) : 0;
};

export const clearConsole = () => {
	process.stdout.write("\x1Bc");
};

export const handleError = (res, error) => {
	return res.status(500).json(error);
};

export const getCurrentUserFromUser = (user) => {
	return {
		fullName: `${user.firstName} ${user.lastName}`,
		accessGroups: user.accessGroups,
	};
};
