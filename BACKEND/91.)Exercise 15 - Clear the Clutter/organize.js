// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


const fs = require("fs");
const path = require("path");

let directoryPath = "./files"; // change this to your directory

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    files.forEach(file => {
        let filePath = path.join(directoryPath, file);

        // skip directories
        if (fs.lstatSync(filePath).isFile()) {

            let ext = path.extname(file).slice(1); // get extension without dot
            let folderPath = path.join(directoryPath, ext);

            // create folder if it doesn't exist
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            let newPath = path.join(folderPath, file);

            // move file
            fs.rename(filePath, newPath, (err) => {
                if (err) console.log(err);
                else console.log(`Moved ${file} -> ${ext}/`);
            });
        }
    });
});