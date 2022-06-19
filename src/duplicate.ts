import fs from 'fs';

for (let i = 0; i < 850; i++) {
    console.log(i)
    fs.copyFileSync('src/0.jpg', `app/assets/${i}.jpg`);


    fs.writeFileSync(`app/assets/${i}.json`, `{
        "name": "BMO Access Pass",
        "symbol": "BMO",
        "image": "${i}.jpg",
        "properties": {
          "files": [
            {
              "uri": "${i}.jpg",
              "type": "image/jpg"
            }
          ],
          "creators": [
            {
              "address": "3J4jGgH5gadeC2ShRT9PAj1Y9diXvaLWv2zQMspsxDdk",
              "share": 100
            }
          ]
        },
        "collection": { "name": "BMO Ghostface", "family": "Gen Zero" }
      }`)
}