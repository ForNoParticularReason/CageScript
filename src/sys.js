// //const S = require('shelljs');
// const child_process = require('child_process');
// const { promisify } = require('util');
// const path = require('path');
// const fs = require('fs-extra');

// const F = require('./functional');
// const C = require('./config');
// const L = require('./logger');

// const execP = promisify(child_process.exec);
// const execRec = function execRec(cmd, ...more) {
//     if (!cmd) return;

//     return execP(cmd);

//     more;
// };
// const exec = (cmd, ...more) => execP(cmd);

// const inst = F.curry((npm, opts, package) => {
//     const opt = opts ? '-g' : ''; // tudu reduce opts for --save-dev
//     const code = S.exec(`${npm} install ${opt} ${package}`);
//     if (!code) {
//         S.echo(`${npm} failed to install ${opt} ${package}: ${code}`);
//     }
// });

// module.exports = {};
// module.exports.cwd = process.cwd;
// module.exports.npmig = inst('npm', true);

// module.exports.exec = exec;

// module.exports.basename = path.basename;

// module.exports.on = path => ({
//     exec: (...cmds) =>
//         Promise.all(
//             cmds.map(cmd =>
//                 execP(cmd, {
//                     cwd: path
//                 })
//                     .then(console.log)
//                     .catch(console.error)
//             )
//         )
// });

// // TODO check if files accessed are child of studios/films

// module.exports.exists = path =>
//     fs
//         .access(path)
//         .then(_ => true)
//         .catch(_ => false);

// module.exports.isEmptyDir = isEmptyDir;
// function isEmptyDir(path) {
//     return fs.readdir(path).then(F.isEmpty);
// }

// module.exports.mkDir = path => {};

// module.exports.ensureDir = path => fs.ensureDir(path);

// module.exports.move = (from, to) => fs.move(from, to);

// module.exports.ensureEmptyDir = path =>
//     fs
//         .ensureDir(path)
//         .then(_ => isEmptyDir(path))
//         .then(itIsEmpty => itIsEmpty || Promise.reject());

// module.exports.path = (...args) => {
//     return path.resolve(...args);
// };

// module.exports.basename = (...args) => {
//     return path.basename(...args);
// };

// module.exports.dirname = (...args) => {
//     return path.dirname(...args);
// };

// module.exports.isFolder = filePath => {
//     return S.test('-d', filePath);
// };
// module.exports.isFile = filePath => {
//     return S.test('-f', filePath);
// };

// module.exports.read = async (filePath, ifFails) => {
//     try {
//         return  fs.readFile(filePath);
//         //return JSON.parse(await fs.readFile(filePath));
//     } catch (e) {
//         if (F.isNil(ifFails)) throw e;

//         L.error(e);

//         return ifFails;
//     }
// };

// module.exports.write = async (filePath, file) => {
//     await fs.writeFile(filePath, file);
// };

// module.exports.openFile = path =>
//     fs.ensureDir(path.slice(0, path.lastIndexOf('/'))).then(_ => ({
//         read() {
//             return module.exports.read(path, '');
//         },
//         write(text) {
//             return module.exports.write(path, text);
//         }
//     }));

// module.exports.readDir = dirPath =>
//     fs.readdir(dirPath).then(names =>
//         Promise.all(names.map(name => {
//             const dp = path.join(dirPath, name);
//             return fs.stat(dp).then(stat => ({
//                 name,
//                 path: dp,
//                 type:
//                     (stat.isDirectory() && 'D') || (stat.isFile() && 'F') || '?'
//             }));
//         }))
//     );

// module.exports.readSync = (p) => {

//   return fs.readFileSync(p).toString('utf8');
// }
