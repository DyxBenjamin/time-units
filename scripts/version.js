import path from 'node:path';
import fs from 'fs/promises';


const versionTypes = ['patch', 'minor', 'major'];
const versionArg = process.argv[2];
if (!versionTypes.includes(versionArg)) {
	console.error(`Error: Invalid version type '${versionArg}'. Please use one of: ${versionTypes.join(', ')}.`);
	process.exit(1);
}
const packageJsonPath = path.resolve(process.cwd(), 'package.json');

async function updateVersion() {
	try {
		const data = await fs.readFile(packageJsonPath, 'utf-8');
		const packageJson = JSON.parse(data);
		const currentVersion = packageJson.version;
		let [major, minor, patch] = currentVersion.split('.').map(Number);
		if (versionArg === 'patch') {
			patch++;
		} else if (versionArg === 'minor') {
			minor++;
			patch = 0;
		} else if (versionArg === 'major') {
			major++;
			minor = 0;
			patch = 0;
		}
		const newVersion = `${major}.${minor}.${patch}`;
		packageJson.version = newVersion;
		await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
		console.log(`Version updated from ${currentVersion} to ${newVersion}`);
	} catch (error) {
		console.error('Error updating version:', error);
		process.exit(1);
	}
}

updateVersion();
