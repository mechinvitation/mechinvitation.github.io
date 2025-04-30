const namelist=
`Mr.Chandan Kumar Pradhan
Mr.Suchisman Pany
Mr.Sandipanee Das
Mr.Zubin Parida
Mr.Anwesh Kumar Patel
Mr.Pratik Mohanty
Mr.Abhishek Kumar Panda
Mr.Jitesh Kumar Prusty
Mr.Priyabrata Swain
Mr.Gourav Kumar Behera
Mr.Subhasis Pati
Mr.Prince Behera
Mr.Harsh Verma
Mr.Amlan Mishra
Mr.Subhankar Jethi
Mr.Rashmi Ranjan Dash
Miss.Adyasha Swain
Mr.Shreyash Bag
Mr.Amartya Praharaj
Mr.Satyam Sibapriya Sahu
Mr.Moheet Kumar
Mr.Rahul Sahu
Mr.Sarthak Pattanaik
Mr.Kamal Rao
Mr.Sambit Baireeshal
Mr.Soumya Ranjan Rath
Mr.Kirti Raj Behera
Mr.Shirshak Padhy
Mr.Anoj Maharana
Mr.Sanjay Kumar Swain
Miss.Sweta Subhadra Nath
Miss.Aishwarya Panda
Mr.Sandeep Peda
Mr.Reenish Mohanta
Mr.Aman Aryan
Mr.Siddhartha Pradhan
Mr.Spandan Das
Miss.Monsoon Mishra
Mr.G Sunyoseph Nayak
Mr.Laxmidhar Behera
Miss.Piyali Sahoo
Mr.Yogesh Rajbeer
Mr.Sai Sandip Sahu
Mr.Soumya Ranjan Das
Miss.Archana Nayak
Mr.Rohit Giri
Miss.Padmaja Sahu
Mr.Shubham Kumar Pradhan
Miss.Laxmpriya Barik
Mr.Debaraj Das
Miss.Aditi Barick
Miss.Jagruti Rath
Mr.Gourav Dash
Miss.Harapriya Mohapatra
Miss.Divyani Samal
Mr.Asit Kumar Dutta
Mr.Swagat Behera
Miss.Smaraki Pradhan
Mr.Subhrajeet Dash
Mr.Jyoti Prakash Behera
Mr.Sangram Keshari Bhanja
Mr.Tapan Kumar Mahapatra
Miss.Debasmita Pani
Mr.Debasis Khuntia
Mr.Anshuman Jena
Mr.Sumanjit Das
Mr.Abhishek Chakraborty
Mr.Sanjay Kumar Tudu
Mr.Siddharth Narendra
Mr.Manas Behera
Mr.Ayushman Sahu
Mr.Yash Ketan Bharadwaj
Mr.Abhishek Prasad Prusty
Mr.Anshuman Behera
Mr.Asutosh Rath
Mr.Sourav Senapati
Mr.Sanket Kumar Budek
Mr.Satish Das
Miss.Sushree Smita Behera
Mr.Soumya Ranjan Munda
Mr.Iswar Chandra Majhi
Mr.Christ Prakash Kiro
Mr.Manish Ekka
Mr.Manoj Kumar Murmu
Miss.Akankhya Behera
Miss.Sonali Moharana
Mr.Dinesh Kumar Soren
Miss.Rajashree Rath
Mr.Binay Kumar Naik
Mr.Abhishek Behera
Mr.Paritosh Majhi
Miss.Sanskruti Nayak
Mr.Mihir Pradhan
Miss.Sikruti Bohidar
Miss.Simran Lakra
Miss.Suryasmita Parida
Mr.Abhisek Nayak
Mr.Srikanta Senapati
Mr.Udit Narayan Sahoo
Miss.Subhalaxmi Mohanty
Mr.Om Ray
Miss.Suchilagna Sahu
Mr.Saswat Kumar Panigrahi
Mr.Pruthiraj Jena
Mr.Mahananda Mohanty
Mr.Nilamani Samantara
Mr.Lokanath Sahoo
Mr.Sujit Kumar Barik
Mr.S K Imran
Mr.U Preetam Kumar
Mr.Kishore Chandra Barik
Mr.Saroj Roul
Mr.Shakti Shankar Sethi
Mr.Utkal Kumar Malik
Mr.Smruti Ranjan Malla
Mr.Basanta Kumar Patra
Mr.Rabi Marndi
Mr.Satwick Somya
Mr.Jayadev Biswal
Mr.D Sai Arpan
Mr.Anniket P Nanda
The_Creator`
const regdNoList=
`2111100001
2111100237
2111100238
2111100239
2111100240
2111100241
2111100242
2111100243
2111100244
2111100245
2111100246
2111100247
2111100248
2111100249
2111100250
2111100251
2111100252
2111100253
2111100254
2111100256
2111100257
2111100258
2111100259
2111100262
2111100264
2111100265
2111100266
2111100267
2111100268
2111100269
2111100272
2111100276
2111100277
2111100278
2111100280
2111100281
2111100282
2111100284
2111100286
2111100287
2111100288
2111100289
2111100290
2111100291
2111100292
2111100293
2111100295
2111100296
2111100297
2111100299
2111100300
2111100301
2111100302
2111100303
2111100304
2111100305
2111100306
2111100307
2111100308
2111100309
2111100310
2111100311
2111100312
2111100313
2111100314
2111100315
2111100318
2111100319
2111100320
2111100321
2111100322
2111100324
2111100325
2111100326
2111100327
2111100328
2111100330
2111100331
2111100332
2111100333
2111100334
2111100335
2111100336
2111100337
2111100338
2111100339
2111100340
2111100341
2111100344
2111100345
2111100346
2111100348
2111100349
2111100350
2111100351
2111100352
2111100354
2111100355
2111100356
2111100357
2111100358
2111100359
2111100668
2212100082
2212100083
2212100084
2212100085
2212100087
2212100088
2212100089
2212100090
2212100091
2212100092
2212100093
2212100094
2212100095
2212100096
2212100097
2212100098
2212100099
2212100100
2211100817`
const names = namelist.trim().split('\n').map(name => name.trim());
const regdNos = regdNoList.trim().split('\n').map(regdNo => regdNo.trim());


document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const enteredRegdNo  = document.getElementById("code").value.trim();
    const regdNoIndex = regdNos.indexOf(enteredRegdNo);
    if (regdNoIndex !== -1) {
      const guestName = names[regdNoIndex];
      localStorage.setItem("guestName", guestName);
      window.location.href = "partypage.html";
    } else {
      document.getElementById("error").textContent = "Invalid invite code!";
    }
  });
