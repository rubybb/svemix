import fs from 'fs';
import path from 'path';
import util from 'util';
const access = util.promisify(fs.access);
const mkdir = util.promisify(fs.mkdir);
const writeToFile = util.promisify(fs.writeFile);
export const SVEMIX_DIR = () => (process.env.TEST == 'true' ? '$lib' : 'svemix');
export const tc = (condition, str) => (condition ? str : '');
async function isDirExisting(path) {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
}
export function posixify(str) {
	return str.replace(/\\/g, '/');
}
export async function writeFile(filePath, data) {
	try {
		if (process.env.NODE_ENV === 'test') {
			return;
		}
		const dirname = path.dirname(filePath);
		const exist = await isDirExisting(dirname);
		if (!exist) {
			await mkdir(dirname, { recursive: true });
		}
		await writeToFile(filePath, data, 'utf8');
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
}