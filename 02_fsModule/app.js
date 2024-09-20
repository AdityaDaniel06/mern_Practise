const http = require('http');
const fs = require('fs');
const uc = require('uppercase');
// reading a file
http
  .createServer((req, res) => {
    fs.readFile('msg.txt', (err, data) => {
      res.write(data);

      res.write(uc('we are Web DeVElopers'));
      res.end();
    });
  })
  .listen(8000);

//creating a new file ; does not require http module as not sending to client as of now.
// appendFile will create a new file, if file already exists then appends the content in it.
fs.appendFile('newFile.txt', 'this is a new file using append file', (err) => {
  if (err) throw err;
  console.log('file created using append file');
});

//fs.open -- used to create a new empty file , if file already exists then replaces the old File.
fs.open('newOpenFile.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('File created through Open');
});

// write a file
fs.writeFile('newWriteFile.txt', 'NEw content here', (err) => {
  if (err) throw err;
  console.log('File created through Write');
});

//update a file== appendFile , writeFile

//delete a file==== fs.unlink
// fs.unlink('newWriteFile.txt', (err) => {
//   if (err) throw err;
//   console.log('File successfully deleted');
// });

// //rename a file
// fs.rename('newOpenFile.txt', 'newFileName.txt', (err) => {
//   console.log('File renamed');
// });
