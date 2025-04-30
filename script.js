const rawData = 
`
Chandan Kumar Pradhan 2111100001
Suchisman Pany 2111100237
Sandipanee Das 2111100238
Zubin Parida 2111100239
Anwesh Kumar Patel 2111100240
Pratik Mohanty 2111100241
Abhishek Kumar Panda 2111100242
Jitesh Kumar Prusty 2111100243
Priyabrata Swain 2111100244
Gourav Kumar Behera 2111100245
Subhasis Pati 2111100246
Prince Behera 2111100247
Harsh Verma 2111100248
Amlan Mishra 2111100249
Subhankar Jethi 2111100250
Rashmi Ranjan Dash 2111100251
Adyasha Swain 2111100252
Shreyash Bag 2111100253
Amartya Praharaj 2111100254
Satyam Sibapriya Sahu 2111100256
Moheet Kumar 2111100257
Rahul Sahu 2111100258
Sarthak Pattanaik 2111100259
Kamal Rao 2111100262
Sambit Baireeshal 2111100264
Soumya Ranjan Rath 2111100265
Kirti Raj Behera 2111100266
Shirshak Padhy 2111100267
Anoj Maharana 2111100268
Sanjay Kumar Swain 2111100269
Sweta Subhadra Nath 2111100272
Aishwarya Panda 2111100276
Sandeep Peda 2111100277
Reenish Mohanta 2111100278
Aman Aryan 2111100280
Siddhartha Pradhan 2111100281
Spandan Das 2111100282
Monsoon Mishra 2111100284
G Sunyoseph Nayak 2111100286
Laxmidhar Behera 2111100287
Piyali Sahoo 2111100288
Yogesh Rajbeer 2111100289
Sai Sandip Sahu 2111100290
Soumya Ranjan Das 2111100291
Archana Nayak 2111100292
Rohit Giri 2111100293
Padmaja Sahu 2111100295
Shubham Kumar Pradhan 2111100296
Laxmpriya Barik 2111100297
Debaraj Das 2111100299
Aditi Barick 2111100300
Jagruti Rath 2111100301
Gourav Dash 2111100302
Harapriya Mohapatra 2111100303
Divyani Samal 2111100304
Asit Kumar Dutta 2111100305
Swagat Behera 2111100306
Smaraki Pradhan 2111100307
Subhrajeet Dash 2111100308
Jyoti Prakash Behera 2111100309
Sangram Keshari Bhanja 2111100310
Tapan Kumar Mahapatra 2111100311
Debasmita Pani 2111100312
Debasis Khuntia 2111100313
Anshuman Jena 2111100314
Sumanjit Das 2111100315
Abhishek Chakraborty 2111100318
Sanjay Kumar Tudu 2111100319
Siddharth Narendra 2111100320
Manas Behera 2111100321
Ayushman Sahu 2111100322
Yash Ketan Bharadwaj 2111100324
Abhishek Prasad Prusty 2111100325
Anshuman Behera 2111100326
Asutosh Rath 2111100327
Sourav Senapati 2111100328
Sanket Kumar Budek 2111100330
Satish Das 2111100331
Sushree Smita Behera 2111100332
Soumya Ranjan Munda 2111100333
Iswar Chandra Majhi 2111100334
Christ Prakash Kiro 2111100335
Manish Ekka 2111100336
Manoj Kumar Murmu 2111100337
Akankhya Behera 2111100338
Sonali Moharana 21111003396
Dinesh Kumar Soren 2111100340
Rajashree Rath 2111100341
Binay Kumar Naik 2111100344
Abhishek Behera 2111100345
Paritosh Majhi 2111100346
Sanskruti Nayak 2111100348
Mihir Pradhan 2111100349
Sikruti Bohidar 2111100350
Simran Lakra 2111100351
Suryasmita Parida 2111100352
Abhisek Nayak 2111100354
Srikanta Senapati 2111100355
Udit Narayan Sahoo 2111100356
Subhalaxmi Mohanty 2111100357
Om Ray 2111100358
Suchilagna Sahu 2111100359
Saswat Kumar Panigrahi 2111100668
Pruthiraj Jena 2212100082
Mahananda Mohanty 2212100083
Nilamani Samantara 2212100084
Lokanath Sahoo 2212100085
Sujit Kumar Barik 2212100087
S K Imran 2212100088
U Preetam Kumar 2212100089
Kishore Chandra Barik 2212100090
Saroj Roul 2212100091
Shakti Shankar Sethi 2212100092
Utkal Kumar Malik 2212100093
Smruti Ranjan Malla 2212100094
Basanta Kumar Patra 2212100095
Rabi Marndi 2212100096
Satwick Somya 2212100097
Jayadev Biswal 2212100098
D Sai Arpan 2212100099
Anniket P Nanda 2212100100`;

const lines = rawData.trim().split('\n');
const names = [];
const regdNos = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const regdNo = line.slice(-10).trim();
  const name = line.slice(0, -10).trim();
  names.push(name);
  regdNos.push(regdNo);
}

// console.log("Names:", JSON.stringify(names, null, 2));
// console.log("Registration Numbers:", JSON.stringify(regdNos, null, 2));

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const enteredRegdNo  = document.getElementById("name").value;
    const regdNoIndex = regdNos.indexOf(enteredRegdNo);
    if (regdNoIndex !== -1) {
      const guestName = names[regdNoIndex];
      localStorage.setItem("guestName", guestName);
      window.location.href = "partypage.html";
    } else {
      document.getElementById("error").textContent = "Invalid invite code!";
    }
  });
