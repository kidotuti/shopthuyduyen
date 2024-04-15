const URL = `https://opensheet.elk.sh/1yJkAYiUl8FwYNtFX6Y16CVk00pMTn5I3PlBViw4WrK8/`;
const skincareIndex = 1;
const products = [];

async function fetchData(pageIndex) {
  try {
    // const response = await fetch(URL + pageIndex);
    // const data = await response.json();
    // console.log("Fetched!");
    const data = [
      {
        PRODUCTNAME:
          "Nước tẩy trang L'ORÉAL 400ml \n3 màu: xanh đậm, xanh nhạt, hồng - Hàng công ty",
        TYPE: "skincare",
        RETAILPRICE: "229,000",
        SALEPRICE: "150,000",
        DISCOUNT: "35",
        IMAGEURLS:
          "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/437903914_1813539699146659_5037121530301984772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UKfujOUNcAIAb4KJoyL&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDu7uH2yYXzLK-Szc-jhvFaq4BldC5Bz5Eew3-jmz3rdw&oe=66208605,https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437953674_1814405922393370_2571969976269372919_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cUc5JLoEzbwAb7nL2qc&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfD71SYOTR4LVGeb4ypUgLqtQhHaDtZZL9pTbK7Eom4OiA&oe=66227ECD",
      },
      {
        PRODUCTNAME:
          "Kem chống nắng MartiDerm phổ rộng bảo vệ toàn diện 40ml\nThe Originals Proteos Screen SPF50+ Fluid Cream",
        TYPE: "skincare",
        RETAILPRICE: "650,000",
        SALEPRICE: "345,000",
        DISCOUNT: "47",
        IMAGEURLS:
          "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/437777587_1813541692479793_7946945581468809148_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XSQ7vB1ZOqsAb7zRE31&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCwDfQquzH2UonRLAkGb4zKIjyFRa-eD_8Cp5pmo_K0Jw&oe=6620ACF8,https://scontent.xx.fbcdn.net/v/t39.30808-6/437784321_1813541529146476_2228231993237744161_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=acLxOTztgTAAb5_jM18&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAiVa6opZ86bxqmaQzZ3_2AloZd6MQEOL1yE171Qd1uQw&oe=6622C29F&_nc_fr=fhan3c04",
      },
      {
        PRODUCTNAME: "Nước hoa hồng Klairs cho da nhạy cảm 180ml",
        TYPE: "skincare",
        RETAILPRICE: "380,000",
        SALEPRICE: "260,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/437773028_1813547592479203_827820607639913759_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sEZ7461mc7UAb58vqsF&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDvD_LPsqV7cE4iGJjMcNlD2cm-bISJMo-GylzcrAL6NA&oe=66208F9D,https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/437859754_1814490182384944_4848065871175715477_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y7TMrl9esUkAb7vsfYV&_nc_ht=scontent.fhan4-5.fna&oh=00_AfB6s0jqogUG1f5GL5J_s-rDvMFC0Au4SZA-9jzntqWJJQ&oe=6622D796",
      },
      {
        PRODUCTNAME:
          "Set kem dưỡng trắng da Olay Total Efects 7in1 - bản UK\nCó tách lẻ hộp",
        TYPE: "skincare",
        RETAILPRICE: "750,000",
        SALEPRICE: "630,000",
        DISCOUNT: "16",
        IMAGEURLS:
          "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/437934276_1813547342479228_6716220293027685097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fACDmZ-FhIIAb4xthfu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfD56oIXgqeqYm_IckwuSd5VcIhQf2i1FsvnOkasq3467g&oe=66215BC6",
      },
      {
        PRODUCTNAME:
          "Nước tẩy trang BIODERMA 500ml\nXanh lá cho da dầu,  hỗn hợp thiên dầu",
        TYPE: "skincare",
        RETAILPRICE: "365,000",
        SALEPRICE: "290,000",
        DISCOUNT: "21",
        IMAGEURLS:
          "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/437777609_1813795875787708_2577795645583683328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oyijinjX2q8Ab7mmTDo&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAjkN6GfNYexfz81Cw4ndyZRlFJZ25988bFQA4Bp89H7w&oe=66217A8C",
      },
      {
        PRODUCTNAME:
          "Nước tẩy trang BIODERMA 500ml\nMàu hồng cho da nhạy cảm, da khô",
        TYPE: "skincare",
        RETAILPRICE: "365,000",
        SALEPRICE: "290,000",
        DISCOUNT: "21",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/437950681_1813795835787712_3375364565186668667_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6im_wRTwsY4Ab5e2evT&_nc_ht=scontent.fhan4-5.fna&oh=00_AfAH4X4hpqWudQRTW_VozFT4gPw_WdXX5KhRLhflJuwInQ&oe=662269E1",
      },
      {
        PRODUCTNAME:
          "Kem chống nắng Pestlo Saferecipe 50ml\nBản vật lý cho da dầu, hàng công ty",
        TYPE: "skincare",
        RETAILPRICE: "480,000",
        SALEPRICE: "330,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/438039631_1813541859146443_5297581608641337862_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-u_ZKnEKzoEAb6T8FOU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCvU0k0BjIpZSBHDDpjIR1LxvXKLLj-BKPyohwmjzSliQ&oe=6620B1A2",
      },
      {
        PRODUCTNAME: "Kem chống nắng L'Oreal X20 thoáng da mỏng nhẹ 50ml",
        TYPE: "skincare",
        RETAILPRICE: "379,000",
        SALEPRICE: "279,000",
        DISCOUNT: "27",
        IMAGEURLS:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/438299841_1813540359146593_7810192851846294054_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z70gohiBfBsAb45G-2C&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCxLRLuZTAxu-esmKfSe1tDlEZ76lP1MMNvK4b7EE0VdA&oe=6620A4A6",
      },
      {
        PRODUCTNAME: "Tinh chất trẻ hóa da Dior Capture Totale Le Sérum 10ml",
        TYPE: "skincare",
        RETAILPRICE: "550,000",
        SALEPRICE: "280,000",
        DISCOUNT: "50",
        IMAGEURLS:
          "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/438030473_1813518955815400_9140994848276619158_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4tJUhHQwbwAAb5fbFWN&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfACFTfcNFBVtjzuP3CkdfOOCH2e6WO14qtER6B8iEW2hw&oe=6620823C",
      },
      {
        PRODUCTNAME:
          "Serum d'Alba dạng xịt khoáng căng bóng da First Spray Serum 100ml",
        TYPE: "skincare",
        RETAILPRICE: "580,000",
        SALEPRICE: "460,000",
        DISCOUNT: "21",
        IMAGEURLS:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/438242289_1814477262386236_344819949917140667_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0QYnpoaIM-EAb6QEjtO&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfC9A0IK6dxeSeMyft6t2bnuAdWs8-PKOK2Bi-u3WVOnNw&oe=6622B7C0,https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/436140919_1814476942386268_3364576344585140230_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WTzzVv2dt0gAb5e8Vam&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfB2x-iQIpPiz9BK4NWV_BQMOFqgkccKVaxYXqaxZcu1xA&oe=6622D1EB",
      },
      {
        PRODUCTNAME: "Kem chống nắng Skin1004 cho da nhạy cảm SPF 50+ 50ml",
        TYPE: "skincare",
        RETAILPRICE: "389,000",
        SALEPRICE: "260,000",
        DISCOUNT: "34",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/438036388_1813541829146446_6311400719670196305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=391y3zqPErAAb41G4Jq&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBbYJ6FsrF7ivxFejiv5jn-q9NBIotP5iL8EJoIzvc9Tw&oe=6620B413",
      },
      {
        PRODUCTNAME: "Smoothie tẩy da chết Dove hương Lựu Đỏ 298g",
        TYPE: "Bodycare",
        RETAILPRICE: "185,000",
        SALEPRICE: "150,000",
        DISCOUNT: "19",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/436206404_1813795792454383_6377959587123866722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rpN_DgifVWoAb4c2ic2&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfCQElXiiL__HThVynCx1mEITEi0C7grZRjFmC-EjInJhg&oe=66218584",
      },
      {
        PRODUCTNAME: "Kem dưỡng Olay Luminous sáng da mờ thâm mám ban đêm 50g",
        TYPE: "skincare",
        RETAILPRICE: "300,000",
        SALEPRICE: "220,000",
        DISCOUNT: "27",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/437935031_1813800675787228_2694429855645972622_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7jY3spjYk7MAb6mvfhM&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDOae0itvQEkIL-7Dy7D9HEZ1Pbf6MScbS99p3-_qJeBQ&oe=66217ECC",
      },
      {
        PRODUCTNAME: "Sữa chống nắng Sunplay Skin Aqua dưỡng da sáng mịn 55g",
        TYPE: "skincare",
        RETAILPRICE: "219,000",
        SALEPRICE: "175,000",
        DISCOUNT: "21",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437965844_1814427679057861_300401192027404845_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=osUGZvRe8hQAb4KNmyJ&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfCm75wo_UWIX-Wsx8Yqo6V7bSJSb5G0JYNTbBg0fCDBhA&oe=66229670",
      },
      {
        PRODUCTNAME: "Gel rửa mặt SVR không chứa xà phòng cho da dầu 400ml",
        TYPE: "skincare",
        RETAILPRICE: "489,000",
        SALEPRICE: "355,000",
        DISCOUNT: "28",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/437850307_1813794932454469_152792199192884312_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=McrDTf4xr5MAb53fXwD&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfDwHOENjwjG91eAPmcww8n4kksCukFIUB3a5nI9f33TXw&oe=66218D03",
      },
      {
        PRODUCTNAME:
          "Gel rửa mặt La Roche-Posay dành cho da dầu, nhạy cảm 400ml",
        TYPE: "skincare",
        RETAILPRICE: "480,000",
        SALEPRICE: "378,000",
        DISCOUNT: "22",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/437923575_1813795005787795_7392967079545279925_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OEih4R3BcdgAb7N1O2B&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfAI1Poi8UiARCgQvoEZ7Z3_jSQXcilAY3iY3lbwGpG82Q&oe=66217FFD",
      },
      {
        PRODUCTNAME: "Nước tẩy trang bí đao Cocoon làm sạch & giảm dầu 500ml",
        TYPE: "skincare",
        RETAILPRICE: "295,000",
        SALEPRICE: "200,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/438263190_1813800572453905_6718090956508131601_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=91rk2lOdy1wAb7I6l34&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfA0vPbMTpiUFZUt8396yOhYkggvLKJKw4Zm8hrqUPZNYA&oe=6621804B,https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437923824_1814427512391211_3360767986379685543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IPRhyFvz8F8Ab6s0M3A&_nc_ht=scontent.fhan4-6.fna&oh=00_AfCuxjzYVHxvzE2VPvQDqpt7sLQi38tJWogqk09MdLLhvg&oe=66229C73",
      },
      {
        PRODUCTNAME: "Kem dưỡng ẩm Klairs làm dịu & phục hồi da ban đêm 60g",
        TYPE: "skincare",
        RETAILPRICE: "389,000",
        SALEPRICE: "355,000",
        DISCOUNT: "9",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/437904358_1813795905787705_4872098333104471014_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1VSg5ZhGh0QAb4UCp44&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDKPh12e22nQyJLKtKK5oW1kOWMB5lbifVdWhxg1BHzRQ&oe=66228DF6&_nc_fr=fhan3c04",
      },
      {
        PRODUCTNAME: "Túi refill tẩy da chết toàn thân Cocoon sạch da 600ml",
        TYPE: "Bodycare",
        RETAILPRICE: "325,000",
        SALEPRICE: "225,000",
        DISCOUNT: "31",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/435127061_1814427445724551_3078671066282573230_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r9A8MHXrV74Ab64Acnr&_nc_ht=scontent.fhan4-5.fna&oh=00_AfCUtiSF3WQVptLa6MQU1EhzKUM-DmM2WkBcye8v2Tc4Rg&oe=66228EDC",
      },
      {
        PRODUCTNAME: "Nước tẩy trang La Roche-Posay cho da dầu, nhạy cảm 400ml",
        TYPE: "skincare",
        RETAILPRICE: "425,000",
        SALEPRICE: "345,000",
        DISCOUNT: "19",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437857648_1814405625726733_2652344804363236395_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YDocNBrTV7sAb56zDUM&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfDQnkXgsdLKw7StV8SVERbxF6TeJ4v7FW4oPytF_rKG5g&oe=66229CC9,https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/435314417_1814405635726732_2464706375271546459_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fm_-ysSEldgAb6qJKlJ&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfAiSOPXivPTiMzzXS4c_o6z9CQIWoK7KSV0VHPItrLNyg&oe=662286B2",
      },
      {
        PRODUCTNAME: "Tinh chất chống nắng Sunplay hiệu chỉnh sắc da 50g (Tím)",
        TYPE: "skincare",
        RETAILPRICE: "245,000",
        SALEPRICE: "185,000",
        DISCOUNT: "25",
        IMAGEURLS:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/438030000_1813541762479786_6960909731609803040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sI1IGsFeHcQAb75l9tO&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfD9Vb0O5_3ZMpKyuEvKaZSphxdZUi4yvfVFFahlpirm0Q&oe=66208428",
      },
      {
        PRODUCTNAME: "Nước tẩy trang L'Oreal làm sạch và cấp ẩm 95ml",
        TYPE: "skincare",
        RETAILPRICE: "150,000",
        SALEPRICE: "75,000",
        DISCOUNT: "50",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/438036762_1813795175787778_8688459982817277691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vux5IWt3DO0Ab7OI_7P&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfCgCL9cfmue9uKkpJNnHmorYd6J-ghkYz3f52cuNn4Zdg&oe=662294D5",
      },
      {
        PRODUCTNAME: "Sữa rửa mặt Simple giúp da sạch thoáng 150ml",
        TYPE: "skincare",
        RETAILPRICE: "132,000",
        SALEPRICE: "79,000",
        DISCOUNT: "41",
        IMAGEURLS:
          "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/437859738_1814567619043867_5315192302346058807_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFImsQg7R-lsOmtWFhEpBeNQvN_bwxB2ORC839vDEHY5E0fkUeQw7mnrjBvgaxruqjkw1Z63gNk1wxzi0gCWoC3&_nc_ohc=AJ-KkSgqyuIAb71UzE_&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBU5n87R-uEE4z6AUVO11aDxoVwIncOD3JGv0wbdx0W-w&oe=6622D3E3",
      },
      {
        PRODUCTNAME: "Sữa rửa mặt Derladie tràm trà sạch sâu, kiềm dầu 150ml",
        TYPE: "skincare",
        RETAILPRICE: "249,000",
        SALEPRICE: "135,000",
        DISCOUNT: "46",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/437858282_1814567889043840_2857087470510935966_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6DvWhloyMkS9l-7vyaFbaZdS2hmSgNwxl1LaGZKA3DLhAV-y7v7kxruA8FMDWaxMzGvdf6iaeqFMyal2aCO9N&_nc_ohc=XEqxluKAKuAAb6EQLYd&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfDuR6TC8CER_AaEatJsL42-IE7X5_tU1LgLf5SykfVLkg&oe=6622EF61",
      },
      {
        PRODUCTNAME: "Nước dưỡng tóc Cocoon tinh dầu bưởi 310ml",
        TYPE: "Bodycare",
        RETAILPRICE: "295,000",
        SALEPRICE: "225,000",
        DISCOUNT: "24",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/437790053_1813547329145896_5433146300325738038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tBqfZuZJLoQAb5laP-Q&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAKmfIixS2aM8JMHxEEoivtsIref7fp813rmeUD8NXv2A&oe=66209C1A",
      },
      {
        PRODUCTNAME: "Nước tẩy trang Garnier làm sạch sâu lớp trang điểm 400ml",
        TYPE: "skincare",
        RETAILPRICE: "219,000",
        SALEPRICE: "150,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/437962751_1813547485812547_6417179134694176185_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B1hMQqiK_tEAb4O4MM5&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDAZodbx_RjyLLrBD-1W-iOatfWoI0vLNyLbm1GDs0nuA&oe=6620A803",
      },
      {
        PRODUCTNAME: "Nước tẩy trang Simple làm sạch trang điểm 200ml",
        TYPE: "skincare",
        RETAILPRICE: "210,000",
        SALEPRICE: "85,000",
        DISCOUNT: "60",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437913616_1814405882393374_7003399362637021515_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9e7D-U_84isAb5UKAto&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfBzdHKqDoKDjrVIGxHAmUJ467tYydajlnU_J9-65Rsq9Q&oe=66228430,https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/436210922_1814405909060038_6017018588868532644_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qyEDNhJIaKoAb44mkNW&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfDmuNAGzy4RNRsAUJBC-7HBwu1IZzbieAd7YsCzY4Q49w&oe=6622795A",
      },
      {
        PRODUCTNAME: "Kem đánh răng Marvis màu Bạc làm trắng răng 85ml",
        TYPE: "bodycare",
        RETAILPRICE: "214,000",
        SALEPRICE: "175,000",
        DISCOUNT: "19",
      },
      {
        PRODUCTNAME: "Son kem lì Black Rouge A12 Dashed Brown nâu gạch 4.5g",
        TYPE: "Makeup",
        RETAILPRICE: "200,000",
        SALEPRICE: "150,000",
        DISCOUNT: "25",
        IMAGEURLS:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/437778443_1814567999043829_3660959449895040483_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGV0eHVAzm6X2P-4uOx8rD2GJkSs5SDpMoYmRKzlIOkyme5jv-Y2XZrhRad0fpJli4GF4RHX-hQUf4zmVpwGxvQ&_nc_ohc=o-Oj7KxocssAb6WnVHO&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDkKFktlVSb3ECiUebqXOCKPQehoDmX1UALjgfqbqthzQ&oe=6622E933,https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/437915000_1814567705710525_2435385191553649860_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMHequUR4U2omdbCJnuFMyvRe_8GZFsS-9F7_wZkWxLwZEYo9p3cNS6rtqPS4OLnf-OhlXU5ECS0VOjt5h-Yo3&_nc_ohc=FlAoJab6OcYAb55feEY&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCm3dlaD5sq-FHOMZawSd85nzRfLxTMUNO7mYfN9xSTww&oe=6622F93B",
      },
      {
        PRODUCTNAME: "Má hồng kem Rare Fullbox 3.2ml\nMàu Hope",
        TYPE: "Makeup",
        RETAILPRICE: "500,000",
        SALEPRICE: "350,000",
        DISCOUNT: "30",
        IMAGEURLS:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/438035329_1813547615812534_5879350729372013370_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r1NefVl_AxYAb6ePU0B&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCt5D3T9XOlwlX_cWlrZ6KUD-dTqSUqk4_H6wKMAVF_0Q&oe=6620A537",
      },
      {
        PRODUCTNAME: "Phấn phủ PERFECT DIARY kiềm dầu đỉnh",
        TYPE: "makeup",
        RETAILPRICE: "277,000",
        SALEPRICE: "200,000",
        DISCOUNT: "28",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/435129988_1813547665812529_62187650496726413_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yYkaEQWqSXkAb4wF71c&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfCfRBHqmrXpP_2kTFbPJ_1RZ7CH7pKqU60Z70EsYjEqzw&oe=662097B6",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng L'Oreal Paris sáng mịn mờ thâm nám ban đêm 15ml",
        TYPE: "skincare",
        RETAILPRICE: "150,000",
        SALEPRICE: "65,000",
        DISCOUNT: "57",
      },
      {
        PRODUCTNAME: "Kem chống nắng Dr.G dưỡng sáng da 10ml",
        TYPE: "skincare",
        RETAILPRICE: "120,000",
        SALEPRICE: "80,000",
        DISCOUNT: "34",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437948602_1813541892479773_6106825915874539981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NE0xi54Z-VUAb43VPSe&_nc_ht=scontent.fhan4-6.fna&oh=00_AfACwHHr-Zwz98v0qLAUlex4dETLaTLZ6z3YN9AUvzQm7g&oe=6622CD68",
      },
      {
        PRODUCTNAME: "Viên uống Blackmores tinh dầu hoa Anh Thảo 190 viên",
        TYPE: "TPCN",
        RETAILPRICE: "986,000",
        SALEPRICE: "550,000",
        DISCOUNT: "45",
        IMAGEURLS:
          "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/437929609_1814376012396361_2550628260648014079_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LcnvliE0SQoAb5Rj0pm&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAclKiBMQzfxYaWKgcVqO4JsqnISpqd4wwDE0GZWEBSJw&oe=6622AFA8",
      },
      {
        PRODUCTNAME: "Chuốt mi Browit kéo dài và cong mi dạng đầu lược 5.5g",
        TYPE: "makeup",
        RETAILPRICE: "165,000",
        SALEPRICE: "115,000",
        DISCOUNT: "31",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/437942664_1813796329120996_8753711092694440441_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ekM_otdza7AAb4-nGuU&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBAe-V7-gad_-obqhuSCzvRs9ZEYARellkQuatzXbgcQg&oe=662285A1&_nc_fr=fhan3c04,https://scontent.xx.fbcdn.net/v/t39.30808-6/437953732_1813796035787692_261586802452111326_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zXT4PCe8OU0Ab5sYQW6&_nc_ht=scontent.fhan3-4.fna&oh=00_AfCYIenwcDTjTKj-dIh2DHVonGDaQpUb37V-XS5svqkFtg&oe=6622B3A9&_nc_fr=fhan3c04",
      },
      {
        PRODUCTNAME: "Gel rửa mặt Cocoon bí đao giúp giảm dầu & mụn 310ml",
        TYPE: "skincare",
        RETAILPRICE: "295,000",
        SALEPRICE: "200,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/438230196_1813800555787240_5867715847802843651_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-INUO4oKVb0Ab5-KTE7&_nc_ht=scontent.fhan4-1.fna&oh=00_AfA7ApqEyHRjQ7nazxUtf04sMJkcLXHiFPA0vi_MffFC2g&oe=662265BB",
      },
      {
        PRODUCTNAME: "Kem nền Maybelline mịn nhẹ kiềm dầu chống nắng 30ml",
        TYPE: "Makeup",
        RETAILPRICE: "288,000",
        SALEPRICE: "220,000",
        DISCOUNT: "24",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/437977119_1813800375787258_2334260440825958756_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xl8g1Swu-3IAb5YBXjz&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAXedyrQf0DWatAtQHbzpmQ4DAgeniJk4Xsid77OWE7EA&oe=66227BFC&_nc_fr=fhan3c02",
      },
      {
        PRODUCTNAME:
          "[Mini] Gel rửa mặt La Roche-Posay dành cho da dầu, nhạy cảm 50ml",
        TYPE: "skincare",
        RETAILPRICE: "145,000",
        SALEPRICE: "75,000",
        DISCOUNT: "49",
        IMAGEURLS:
          "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/436222162_1813547525812543_2999829064346856341_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I1V_zcjS7DcAb7P1qcW&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBqCHkhm5_lhJp4isazjx8XOOZs_5rth3jmaVpC-FxdhQ&oe=66209F32",
      },
      {
        PRODUCTNAME: "Gel rửa mặt Bioderma dành cho da dầu & hỗn hợp 500ml",
        TYPE: "skincare",
        RETAILPRICE: "545,000",
        SALEPRICE: "370,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437852732_1814405739060055_4418326556980104115_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kAotzTsczf4Ab4wFwmJ&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfD8F5pGV4cds1pBEhnhxGoEe2ozGuZwy10Z4k7EfXYVow&oe=662297DC",
      },
      {
        PRODUCTNAME: "Kem che khuyết điểm The Saem 6.5g",
        TYPE: "Makeup",
        RETAILPRICE: "200,000",
        SALEPRICE: "80,000",
        DISCOUNT: "60",
        IMAGEURLS:
          "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/437852801_1814490325718263_8938125462115343590_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N_Y3YEop8NIAb6t2rWT&_nc_ht=scontent.fhan4-3.fna&oh=00_AfANcAtCKVgq-m6plgEZozmVEzvuIZaDNvxNHH9SJd6Qhw&oe=6622BAD9",
      },
      {
        PRODUCTNAME: "Kem chống nắng CNP Laboratory nâng tông da 50ml",
        TYPE: "skincare",
        RETAILPRICE: "390,000",
        SALEPRICE: "265,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/438263621_1813541865813109_5473874169713730498_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AXtpKiQpf6cAb5_xlwP&_nc_ht=scontent.fhan3-4.fna&oh=00_AfB_rzutSSb5yXPJzt1O3Wz2oyarLAQx-bA-2nx5MSRoCw&oe=6622B285&_nc_fr=fhan3c04",
      },
      {
        PRODUCTNAME: "Mặt nạ ủ tóc Fanola phục hồi tóc hư tổn 1500ml",
        TYPE: "Bodycare",
        RETAILPRICE: "370,000",
        SALEPRICE: "300,000",
        DISCOUNT: "19",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/437853112_1813794795787816_1296359739435552089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C91bDxUDMFYAb45xQVE&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBvWL2E5LSlMLKbkGvrsznxa1KqcyI_6myKp5dcbrfajw&oe=662172A5",
      },
      {
        PRODUCTNAME: "Sáp tẩy trang Banila Co Original cho mọi loại da 100ml",
        TYPE: "Makeup",
        RETAILPRICE: "250,000",
        SALEPRICE: "175,000",
        DISCOUNT: "30",
        IMAGEURLS:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/437976519_1813547412479221_9075115301230261605_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GpaHaVjegg0Ab4q4nz6&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfACwoSDRjh9zrZaXIXzvbr1ZFCHxnyc40yifA5AUKckVQ&oe=662094E7",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng Forencos Peptide sáng da, giảm nhăn ban đêm 50ml",
        TYPE: "Skincare",
        RETAILPRICE: "890,000",
        SALEPRICE: "450,000",
        DISCOUNT: "50",
        IMAGEURLS:
          "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/437930173_1813800202453942_3419195869069294882_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8ly9AxnZA7cAb6fHo6P&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDz7uXOpA9TMslrWc-CbzNZ0_vlQCGbRmIlIcDL-1jXIQ&oe=6621664D",
      },
      {
        PRODUCTNAME: "Sữa rửa mặt Cosrx Salicylic Acid 0.5% tái tạo da 150ml",
        TYPE: "Skincare",
        RETAILPRICE: "300,000",
        SALEPRICE: "155,000",
        DISCOUNT: "49",
      },
      {
        PRODUCTNAME: "Sữa rửa mặt PHA 5.5 – sạch sâu, dịu nhẹ làn da",
        TYPE: "Skincare",
        RETAILPRICE: "300,000",
        SALEPRICE: "170,000",
        DISCOUNT: "44",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437947239_1813800705787225_1026067139624546135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Js7BA7HlEQMAb6QKt2c&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBq7UeagqqgzExGwsKNV3-DiB8sLxDUXpzVanzMI-DeGQ&oe=6622BEB8",
      },
      {
        PRODUCTNAME: "[Mini] Serum Vichy khoáng phục hồi chuyên sâu 10ml",
        TYPE: "Skincare",
        RETAILPRICE: "199,000",
        SALEPRICE: "110,000",
        DISCOUNT: "45",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/437936343_1813547892479173_5703173977940913878_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9EC7zT5udQ0Ab6S8WMF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDtpltVeElCvqmVdT8VoJyD4WkXXK0x2eHsMsGvWfMahg&oe=6620B931",
      },
      {
        PRODUCTNAME: "Sữa rửa mặt Vichy dạng gel làm sạch sâu da dầu mụn 50ml",
        TYPE: "Skincare",
        RETAILPRICE: "140,000",
        SALEPRICE: "75,000",
        DISCOUNT: "47",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng da Cá Hồi, hỗ trợ dưỡng trắng, cải thiện ta lão hóa Cre8skin Salmon Oil Cream 80g",
        TYPE: "Skincare",
        RETAILPRICE: "650,000",
        SALEPRICE: "300,000",
        DISCOUNT: "54",
        IMAGEURLS:
          "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/435181056_1814567779043851_2568292295013310524_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHIJUMSGiBpB3tzmH-kSSnRbx46wKOML6BvHjrAo4wvoA29f6MEM2rnbq7wmxFq1DYKpkrlZ96W0v1jjWr9pVGE&_nc_ohc=TRhgKoyosjEAb62MxPH&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfC48S1aWlCze1mz1HRbpyNFfvnWIoBvpOFygxPQUoSEow&oe=6622E373,https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/438255211_1814567349043894_5816812774427579419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHy3PZv1Gv4GnrJMMIy4HP_NDNLjATn7CQ0M0uMBOfsJA9-ZXoWG4pYOalhEICbElujq8m7hwRCJAJdezSslqw6&_nc_ohc=Nv0peT-ktKgAb6-7Jbb&_nc_oc=Adhg-JXXvvuDv6a4-ikLVUBdf2VWtP4Q6YTZC5RYbAMpOyzr-NhpQIpFXxITB3CPurg&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC1wBxYqUx1Oq8U33W57daxJjELT8AgFcKgKU9ipMEO_A&oe=6622E344",
      },
      {
        PRODUCTNAME: "Bảng tạo khối và highlight City Color 4.5g",
        TYPE: "Makeup",
        RETAILPRICE: "250,000",
        SALEPRICE: "150,000",
        DISCOUNT: "40",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/438035261_1813547472479215_6426689924047237803_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rRVyjd9nFuEAb4eE4yo&_nc_ht=scontent.fhan3-4.fna&oh=00_AfB812eLZeNNknUgzyFeHYPUIcKr-i3GcAyyH0iiBN277Q&oe=6622A101&_nc_fr=fhan3c04",
      },
      {
        PRODUCTNAME:
          "Khẩu trang Unicharm 3D Mask siêu thoáng khí Hộp 100 Miếng",
        TYPE: "Bodycare",
        RETAILPRICE: "299,000",
        SALEPRICE: "205,000",
        DISCOUNT: "32",
      },
      {
        PRODUCTNAME:
          "Serum dưỡng thể Vaseline 50X chống nắng sáng da 300ml\nSPF 50+ PA++++",
        TYPE: "Bodycare",
        RETAILPRICE: "203,000",
        SALEPRICE: "135,000",
        DISCOUNT: "34",
        IMAGEURLS:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/435172791_1814568052377157_7670940503174881757_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEeYZfZpfOYl1k99RXqjSYQaGq98C6mkBJoar3wLqaQEv36gx02sRqEyMzKHHNMEFfwKpkBOu9ozr1BWovkZSYV&_nc_ohc=dfC9WzE9UkIAb6TrYyo&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfA-i7rKo4y1tbSZ4NZApfLrxWNCBGU_4xSRJ4VY1OeX6g&oe=6622F938",
      },
      {
        PRODUCTNAME:
          "Nước Dưỡng Tóc Cocoon Sa-Chi Cấp Ẩm, Phục Hồi Hư Tổn 140ml",
        TYPE: "Bodycare",
        RETAILPRICE: "145,000",
        SALEPRICE: "99,000",
        DISCOUNT: "32",
      },
      {
        PRODUCTNAME: "Kem chống nắng Cell Fusion C nâng tông da 50ml",
        TYPE: "Skincare",
        RETAILPRICE: "399,000",
        SALEPRICE: "290,000",
        DISCOUNT: "28",
        IMAGEURLS:
          "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/438039484_1813540299146599_2025937915928774273_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JNORaSCASKoAb7MSHJ5&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAG3SMaSIRMDq2BboHkPSlDJYiDR3CqElWn8Kalpu7YHA&oe=6620B2FC",
      },
      {
        PRODUCTNAME: "Kem đánh răng thảo dược Phoca nha đam 25G",
        TYPE: "Bodycare",
        RETAILPRICE: "90,000",
        SALEPRICE: "65,000",
        DISCOUNT: "28",
        IMAGEURLS:
          "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/437876842_1813547442479218_9002881654665928310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HmKibp-6FtIAb5PtqYt&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCuVBgwnww8WVyWHYwfET1weFP_n4bEDXB36SdRTEpMHA&oe=662091FC",
      },
      {
        PRODUCTNAME: "Gel bôi ngoài da Klenzit C điều trị mụn viêm, trứng cá",
        TYPE: "Bodycare",
        RETAILPRICE: "30,000",
        SALEPRICE: "25,000",
        DISCOUNT: "17",
        IMAGEURLS:
          "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/436209187_1813795412454421_5460356617890214563_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WBs7q7UAvFAAb6YExG9&_nc_ht=scontent.fhan4-3.fna&oh=00_AfC2x3E8b5MxyCj76CMgO8SifHronNHEnRVlQGkpv1OVvg&oe=6622B099",
      },
      {
        PRODUCTNAME: "Gel bôi ngoài da Klenzit MS điều trị mụn ẩn (15g)",
        TYPE: "Houseware",
        RETAILPRICE: "350,000",
        SALEPRICE: "300,000",
        DISCOUNT: "15",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/437880600_1813794832454479_1473042471842946610_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ObcDhgb8kfIAb6hH3AM&_nc_ht=scontent.fhan3-3.fna&oh=00_AfAcK9XjAw8e70IczZ5E3aL1ZYheV2fk7VHpenmlNNXPmA&oe=6622C4D6&_nc_fr=fhan3c03",
      },
      {
        PRODUCTNAME: "Gel trị mụn AZELAIC ACID GEL 20% 15G",
        TYPE: "Skincare",
        RETAILPRICE: "199,000",
        SALEPRICE: "155,000",
        DISCOUNT: "23",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/438196831_1813795945787701_609857800800902180_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_7OKrqkBI9IAb6r52pL&_nc_ht=scontent.fhan4-5.fna&oh=00_AfBjq41Ja3dleCXr06g3IqYZJUlEQbSuBtGCXS3JNOUizg&oe=66229E84",
      },
      {
        PRODUCTNAME: "Gel chấm mụn diệt khuẩn Floslek Anti Acne 20ml",
        TYPE: "Skincare",
        RETAILPRICE: "350,000",
        SALEPRICE: "200,000",
        DISCOUNT: "43",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/437875326_1813800625787233_1135659448260321151_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d6iBX3WUAy8Ab4c57tq&_nc_ht=scontent.fhan4-5.fna&oh=00_AfDwuXvIpdUIj_IIU48Y-DWPffH35A0kemTAunY-x9YPTw&oe=6622E521",
      },
      {
        PRODUCTNAME:
          "Sữa chống nắng Cocoon chiết xuất bí đao quang phổ rộng 50ml",
        TYPE: "Skincare",
        RETAILPRICE: "395,000",
        SALEPRICE: "245,000",
        DISCOUNT: "38",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/435150893_1814375942396368_6547981777805021635_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vl61eG6OttQAb4bHwG1&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAGVLOjSeyrNIwn4iFVmMZ3ztx4swFVuS66n7CWUAlOaQ&oe=6622C43B",
      },
      {
        PRODUCTNAME:
          "Kem chống nắng WOOLWORTHS EVERYDAY SUNSCREEN SPF 50+, Can 1 Lít",
        TYPE: "Skincare",
        RETAILPRICE: "700,000",
        SALEPRICE: "480,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/437939839_1813794735787822_6846710593863266405_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qhP9R00s8UsAb5BfFM8&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAb9R26L3cplS8Zdb1hDhzoF8L9Km1B4Lo2Uz8roch52Q&oe=6622B4DC",
      },
      {
        PRODUCTNAME:
          "Set xịt khoáng + kem chống nắng CNP Laboratory - Full set 2 món",
        TYPE: "Skincare",
        RETAILPRICE: "630,000",
        SALEPRICE: "350,000",
        DISCOUNT: "45",
        IMAGEURLS:
          "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/437964705_1813796419120987_6525119786822514421_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iKaSe3IgB9wAb623-xI&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDPTiDB77v6hVEdhDQr5glwU_t5V6MytvxY80VqFEENfQ&oe=6622CA28",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng trắng da chống lão hoá ESTEE LAUDER REVITALIZING SUPREME+ BRIGHT 15ML",
        TYPE: "Skincare",
        RETAILPRICE: "380,000",
        SALEPRICE: "260,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/435195333_1813795205787775_3016149635003941001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FOHJ0G_OGXgAb4hNr2X&_nc_ht=scontent.fhan4-5.fna&oh=00_AfBEobe3J-KskMX3qhwAGjfe528O20ftE2RCSBvHkV0rwg&oe=6622A161,https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/437959599_1814477272386235_4260221787798913761_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-,https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/435891220_1814477075719588_7729890713621601096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jjgjOwzsbzkAb5KCf0V&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBIY4ppY7sLODOZScF9NxSxPWBf0bxDo60JzgTCu_IVvg&oe=6622C5037&_nc_sid=5f2048&_nc_ohc=RcouYHJlykUAb6tzvpq&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDxFrBVDanxEJFYjLIRNFDYkYykUlKN0hEojg11QZGNkg&oe=6622AE8E",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng chống lão hoá da ban đêm ESTEE LAUDER REVITALIZING SUPREME+ NIGHT 15ML",
        TYPE: "Skincare",
        RETAILPRICE: "380,000",
        SALEPRICE: "250,000",
        DISCOUNT: "35",
        IMAGEURLS:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/437970843_1814477359052893_4327474743901253714_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ichdFsHsuRQAb6w5QLO&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAuUb1e_AmSentfugwf_QBUQp-jKOzB3V2Kz2dB9ojTMQ&oe=6622BF09",
      },
      {
        PRODUCTNAME:
          "Kem dưỡng ẩm phục hồi ban đêm Kielhs Midnight Recovery Omega Rich Cloud Cream 15ml",
        TYPE: "Skincare",
        RETAILPRICE: "299,000",
        SALEPRICE: "175,000",
        DISCOUNT: "42",
        IMAGEURLS:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/437892076_1813795105787785_8715766969727000466_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qQ2b6lZimjEAb6zF9zk&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBq5g_e8inJo6fdxViRM84426cFJ6-76l6lbzCqyPpJAw&oe=6622A409",
      },
      {
        PRODUCTNAME: "Miếng dán mụn Some By MI",
        TYPE: "Skincare",
        RETAILPRICE: "99,000",
        SALEPRICE: "79,000",
        DISCOUNT: "21",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437795928_1813800749120554_192126833305615981_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uYMSwQ9ifCMAb5jN-09&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfDa9yZ_sGq-Ez6ScC9iVSLhBBypQcF1aQ1jLjIharPRPQ&oe=6622863B",
      },
      {
        PRODUCTNAME: "Bông tẩy trang con mèo 222 miếng",
        TYPE: "Skincare",
        RETAILPRICE: "39,000",
        SALEPRICE: "27,000",
        DISCOUNT: "31",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437919201_1813794969121132_887080768263909322_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DLdKwheWARAAb69bHJQ&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBf8tHF363eh5S-sfc8_kJEXLKVgb2YVsSIqSEjRgaTHw&oe=66226216",
      },
      {
        PRODUCTNAME: "Kem nền Catrice mỏng mịn 30ml ",
        TYPE: "Makeup",
        RETAILPRICE: "299,000",
        SALEPRICE: "220,000",
        DISCOUNT: "27",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437923124_1813800612453901_8789480683131242728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B2ozqi_mQUkAb4CRt_T&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfD0nwy9vGNjeYZWewgavN-SewQcuvdInvp7hqipceNqHA&oe=66228AA7",
      },
      {
        PRODUCTNAME: "Thuốc mọc tóc SATO của Nhật 30ml",
        TYPE: "Bodycare",
        RETAILPRICE: "199,000",
        SALEPRICE: "145,000",
        DISCOUNT: "28",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/435891264_1813800512453911_1818567892771491860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q09e1qbdth8Ab7MV0El&_nc_ht=scontent.fhan4-6.fna&oh=00_AfAJtdXoHaRmbSCrfunWlpnU2s4LXrXaBoHODu90iSao_Q&oe=662276B2",
      },
      {
        PRODUCTNAME:
          "Kem đào dưỡng trắng da CORINGCO PEACH WHIPPING TONE UP CREAM 50ml",
        TYPE: "Skincare",
        RETAILPRICE: "170,000",
        SALEPRICE: "130,000",
        DISCOUNT: "24",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/438229624_1813796285787667_4258605253798447988_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ACsAxOfoRjQAb61DQ02&_nc_ht=scontent.fhan3-3.fna&oh=00_AfC9fqUNEbFpRaJaZvMmZLb0VPPy_S6Yj9XGKr91xjrvQw&oe=6622980C&_nc_fr=fhan3c03",
      },
      {
        PRODUCTNAME: "Gel dưỡng ẩm nha đam NATURE REPUBLIC 300ml",
        TYPE: "Skincare",
        RETAILPRICE: "150,000",
        SALEPRICE: "85,000",
        DISCOUNT: "44",
        IMAGEURLS:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/437973403_1813796245787671_2504275206790274428_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JTUoGAiI6MUAb4a4JZA&_nc_oc=AdjsWQc5_Wjda9eqNDQG0E5gQOjuBkEieffanmkDKKBQp_kUwRone3AL-Pdij4sqFb4&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBajZ5ytt3Z1AG3rSpE3Vqpdu-wj4LpdDyWzAlsJDxFxA&oe=66229A61",
      },
      {
        PRODUCTNAME: "Kem dưỡng da tay Vaseline 65ml",
        TYPE: "bodycare",
        RETAILPRICE: "99,000",
        SALEPRICE: "68,000",
        DISCOUNT: "32",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/438240703_1813796085787687_7709388829200704363_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jZcxG4U7RNEAb5lcI50&_nc_ht=scontent.fhan4-5.fna&oh=00_AfCb75Gx6VjLTfqlWb7hyH9QemZUfdHEwn9HfnxkApTBlw&oe=6622BCF3",
      },
      {
        PRODUCTNAME: "Viên uống chống nắng + trắng da Triple White mẫu mới",
        TYPE: "Skincare",
        RETAILPRICE: "750,000",
        SALEPRICE: "550,000",
        DISCOUNT: "27",
        IMAGEURLS:
          "https://scontent.xx.fbcdn.net/v/t39.30808-6/437941758_1813795475787748_5958185122482830874_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EUFh3HYxzFUAb7le_6F&_nc_oc=Adhq0R1jiN_fGOD0WKCJmI9c3evqaM_QcxdrpJI65r6cKpJAdxOwgH_H3XT7sOnWTqs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfCaRknSKV2LJX3rCfZ6eQO3NRJIWxzminDo5bEoQZV0Eg&oe=66229B1C&_nc_fr=fhan3c04,https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/438224017_1813795649121064_3046722166841534422_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RWNSaNs5yc8Ab6dXpZm&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAcK6dSAKmcnR5MVuBnDhAp6BH7UpC9YT5UJe2KAy59KA&oe=6622D95D",
      },
      {
        PRODUCTNAME: "Kem nền TF mini tông sáng da 4ml",
        TYPE: "Makeup",
        RETAILPRICE: "300,000",
        SALEPRICE: "175,000",
        DISCOUNT: "42",
        IMAGEURLS:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/435922747_1813795512454411_4498471721038688591_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rbBVqnQz9ZIAb5b9TYj&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCC7acCmW-QZT0T8sXqpYftlXpktyk_dn-dCxWhg1Stqg&oe=66229ED6",
      },
      {
        PRODUCTNAME:
          "Kem chống nắng nâng tông INNISFREE Tone Up No Sebum Sunscreen EX SPF 50+ PA++++ 60 mL",
        TYPE: "Skincare",
        RETAILPRICE: "383,000",
        SALEPRICE: "299,000",
        DISCOUNT: "22",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/438242132_1813795722454390_7162873255681562579_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BBshy_7UOugAb4HELmk&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBKkb3YSLXNpE4eSUqVKNb_TQrMW_L-IssHP69Crk3H6w&oe=6622A55F",
      },
      {
        PRODUCTNAME:
          "Nước nhỏ mắt Sancoba 0.02% cải thiện chứng mỏi mắt do điều tiết lọ 5ml",
        TYPE: "bodycare",
        RETAILPRICE: "65,000",
        SALEPRICE: "45,000",
        DISCOUNT: "31",
        IMAGEURLS:
          "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/437892444_1814477412386221_2401457369446047352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MoMd-vxHQ88Ab5wVoXr&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAs86un0ZTX2behtUIhJxjjRgKv3Hb6finBa3cb8Or9_w&oe=6622C3DE",
      },
      {
        PRODUCTNAME:
          "Cushion phấn nước Clio hồng Kill Cover Mesh Glow SPF50+ PA++++ 15gx2 [KÈM 1 LÕI THAY] Căng bóng che khuyết điểm",
        TYPE: "Makeup",
        RETAILPRICE: "650,000",
        SALEPRICE: "400,000",
        DISCOUNT: "39",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437986599_1813795242454438_4824536639922944696_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jjsh1PIWKdgAb6L3ujq&_nc_ht=scontent.fhan4-6.fna&oh=00_AfCLgCE8eupyUdNCxXr7i-9Bbm08vnF2Caz9RwXoO1GLYg&oe=6622AD6B,https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/435163137_1814477205719575_304126220158444168_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=evRqH36xxHQAb7i6XZl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBxvpSQ_oTDGGyWCGz0_xnzbrOF8V7OIRVZZkbawczAug&oe=6622A1C6",
      },
      {
        PRODUCTNAME: "Red Peel Tingle Serum 11ml tinh chất tái tạo da",
        TYPE: "Skincare",
        RETAILPRICE: "250,000",
        SALEPRICE: "175,000",
        DISCOUNT: "30",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437881561_1814490335718262_720536878632855323_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HVBOF_JPXx0Ab6DhbjM&_nc_ht=scontent.fhan4-6.fna&oh=00_AfC6gzJQCdZKn8Xd_O3b_xdVin_vxLQZkraJBAM17eYmWQ&oe=6622CE61",
      },
      {
        PRODUCTNAME:
          "Bảng triết sắc che khuyết điểm đa năng 5 Ô CATRICE AllRound Concealer Palette",
        TYPE: "Makeup",
        RETAILPRICE: "199,000",
        SALEPRICE: "135,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/435139839_1813547745812521_1614786964638398884_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=plcMdJIbgQ8Ab6KwloJ&_nc_ht=scontent.fhan4-5.fna&oh=00_AfAHOeXjS7vzg3IKJvWXZeVdPm_1ISOzMGeK9jp-H6ZJbw&oe=6622C69E",
      },
      {
        PRODUCTNAME: "Serum vitamin C 561 Esthepro 100ml Hàn Quốc dưỡng trắng",
        TYPE: "Skincare",
        RETAILPRICE: "299,000",
        SALEPRICE: "200,000",
        DISCOUNT: "34",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437858649_1814490379051591_1427275087210580984_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gmDtTPE7A5cAb6XKJC9&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBEiKMwyu2SBhnt3KYiSNIljwIKqjDno9Ptm3DAIQ_-Bw&oe=6622C80B,https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/438171380_1814490202384942_4074657840882729161_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WrMISIRFZecAb6HoQ9d&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCxF9Iq5wsCz3bx_LuTISRDBNvZdlF39jm1Ml2d_bbMKw&oe=6622DF2E",
      },
      {
        PRODUCTNAME:
          "Sữa rửa mặt BABE Stop AKN Purifying Cleansing Gel cho da dầu mụn 200ml",
        TYPE: "Skincare",
        RETAILPRICE: "429,000",
        SALEPRICE: "315,000",
        DISCOUNT: "27",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/438240404_1814490302384932_6980738287725100231_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uXHcCWBZeFUAb609kC6&_nc_ht=scontent.fhan4-6.fna&oh=00_AfCFzPaisdUClUkS8Bsqfb2j4F__49VH2-B-stasigrE9g&oe=6622D023,https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/437882453_1814490265718269_9177362600244462957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6hWAc3spGYAAb4sM4fv&_nc_oc=AdhNG-S1LqFDAFoQIVxPWyFlI7hiHP2T5v2oK5zWrXK9NlAwgvD1tXb7udSr9cgPL90&_nc_ht=scontent.fhan4-6.fna&oh=00_AfDi_QbuNkj9pR84xc5DN-u_8sZFxna4ZmdXgG7tdwg9iQ&oe=6622B172",
      },
      {
        PRODUCTNAME:
          "Serum tẩy tế bào chết, cải thiện mụn The Ordinary AHA 30% BHA 2% Peeling Solution 30ml",
        TYPE: "Skincare",
        RETAILPRICE: "390,000",
        SALEPRICE: "255,000",
        DISCOUNT: "35",
        IMAGEURLS:
          "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/437857478_1813795135787782_7733256269540664421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z1dyuI9FrZsAb4xhFB5&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAV1Cr4dejM5mrMWdUe32EBabWSxR0I1i4CN01yESZISw&oe=6622B6C1",
      },
      {
        PRODUCTNAME:
          "Sữa tắm Olay B3 + Peptide phục hồi da hư tổn, mờ sẹo và làm đều màu da body 500ml",
        TYPE: "bodycare",
        RETAILPRICE: "250,000",
        SALEPRICE: "175,000",
        DISCOUNT: "30",
        IMAGEURLS:
          "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/438029539_1813547899145839_8386882967411463064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-IsOLmJk3JMAb4bngi3&_nc_oc=AdhqbhDmUgU5_XU1_CZzvPkajNzkULIU0-gDJGPtauTbEfSC_ITNrvTwDTh1cbd_FHo&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBSXdNWuLpRcOVydLRv-NtqnbzGhYNvKwb5mkhg8Hcaew&oe=6622D585",
      },
      {
        PRODUCTNAME: "Lăn khử mùi Scion Pure White Roll On Nuskin của Mỹ",
        TYPE: "bodycare",
        RETAILPRICE: "250,000",
        SALEPRICE: "175,000",
        DISCOUNT: "30",
        IMAGEURLS:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/437913865_1813547552479207_4494496793563350114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1hxrv2vwFuIAb4fR4bN&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfBYahOtbVT8UiD7PJV701TmifDVhphBKOdpMiDaKiApbw&oe=6622CF06",
      },
      {
        PRODUCTNAME:
          "Tinh chất làm sáng da, mờ thâm, duy trì sau điều trị Hydroquinone - MartiDerm Pigment Zero DSP Serum Illuminator (30ml)",
        TYPE: "Skincare",
        RETAILPRICE: "850,000",
        SALEPRICE: "550,000",
        DISCOUNT: "36",
        IMAGEURLS:
          "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/437778601_1813547875812508_8592973688294551367_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-l2G0gGUcdMAb4lR5KZ&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCSA8Tsvab-QZVH1g_NXzgA__6JmtVWh4KxCXfuGQN6Zw&oe=6622E356",
      },
      {
        PRODUCTNAME: "Son dưỡng môi Vaseline mềm mịn 4.8g",
        TYPE: "Makeup",
        RETAILPRICE: "70,000",
        SALEPRICE: "55,000",
        DISCOUNT: "22",
        IMAGEURLS:
          "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/435166789_1813547609145868_4685588371733004368_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EUkEVbfXZJIAb5ZpP2o&_nc_ht=scontent.fhan4-3.fna&oh=00_AfAdRM22zzpqj8qa8bqfoOS6TolleBSYKnVK_za7HxrRUg&oe=6622BF13",
      },
      {
        PRODUCTNAME:
          "Son Ink kem lì Velvet Lip Tint màu 27 Strawberry nude hồng đất 4g",
        TYPE: "Makeup",
        RETAILPRICE: "155,000",
        SALEPRICE: "135,000",
        DISCOUNT: "13",
        IMAGEURLS:
          "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/438034733_1813547802479182_7376627316492505513_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HK8CSELIhqMAb5zLL_n&_nc_ht=scontent.fhan4-5.fna&oh=00_AfAlygLAwDpeDTZ_kU47bToT2M00FL_xuMLE7M4pnuf6wA&oe=6622D856",
      },
      {
        PRODUCTNAME:
          "Son kem lì, lên màu siêu chuẩn Bbia Last Velvet Lip Tint 5g",
        TYPE: "Makeup",
        RETAILPRICE: "290,000",
        SALEPRICE: "135,000",
        DISCOUNT: "54",
        IMAGEURLS:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/438241386_1814567942377168_2652897535215459743_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFC6Hy_3nR0R_4fLekvCi-I2bEP0MVOI1vZsQ_QxU4jWzmaitJNeVaPLc8lB4bnRsGIlgMLW8Dr78L3O2b7goH8&_nc_ohc=tAuAMX6tBuYAb7fo3K6&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAG6j-A8vv4MSabNewoo5c1yTVnqnHcnAK3gN4vyLI0fw&oe=6622D97A,https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/437957507_1814567805710515_887624113610020520_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHD2ktFqOIB_LH-cGasvTnY4NUvyhhiHlLg1S_KGGIeUhwvUPx7_bO4Uqh3QTBAl7KJRp6XxXT3DQiMFr77ux7x&_nc_ohc=9WIUOxbjboIAb4KUmmR&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDUAxjxnMC07JoYg-nU7zSAEjGYso2ruZBjcgbtXfgucQ&oe=66230195,https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/438029499_1814567795710516_3176379213401450421_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFPGjiJ7wKmMcBtE7d973uviXZAwGucyoCJdkDAa5zKgIXd_gI-z-mbn-_pNbNyPaXwkYrQgAewDxZCYDdl3ExC&_nc_ohc=bHEYfymC0zMAb7QRoes&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBvWocjQ2AnqdhO-NLKMxica_O0hRAoE0qeLRLyYyM3IQ&oe=6622ECBD,https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/438205719_1814567432377219_8842567690011411274_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeES0BheWJmalg2Rh40hYxY0JJpse606s1Ukmmx7rTqzVa3Zeh4NaaeBfVF1Lpl0HKjv3LjXDaHx8QAKDmyJuiAR&_nc_ohc=tWSmN1e_qpIAb6D6aBc&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDfgBo2X7xDwhvZZJckNjQS3x3pkz-QiunRbsD5cb882A&oe=6622FA4B",
      },
      {
        PRODUCTNAME:
          "Sữa tắm trắng da Alpha Arbutin 3 Plus Collagen Bath Cream làm trắng da 350ml",
        TYPE: "bodycare",
        RETAILPRICE: "199,000",
        SALEPRICE: "135,000",
        DISCOUNT: "33",
        IMAGEURLS:
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/437941894_1814567422377220_8049453579604159147_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHm05srVoWZGjxzIyLPIBYa8B8ZyicGiIHwHxnKJwaIgdrx8jOxl1_9txgHbe-7ParlBSgE_NoMOerJu1rq39zq&_nc_ohc=tIR3rwqyJ1QAb7hXgHv&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBlececIeeloC7bWJq1hLw3e7SI9LcOLs6jQTZh8uDivA&oe=6622D553",
      },
    ];

    for (const product of data) {
      if (
        product.PRODUCTNAME &&
        product.PRODUCTNAME.trim() !== "" &&
        product.TYPE &&
        product.TYPE.trim() !== ""
      ) {
        const newProduct = {
          name: product.PRODUCTNAME,
          type: product.TYPE,
          retailPrice: product.RETAILPRICE,
          salePrice: product.SALEPRICE,
          discount: product.DISCOUNT,
          imageUrls: product.IMAGEURLS,
          saleType: "",
        };
        products.push(newProduct);
      }
    }
    console.log("Size sản phẩm: " + products.length);
    renderProducts("", products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(skincareIndex);

function removeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderProducts(searchQuery, products) {
  const productsContainer = document.getElementById("productitems");
  productsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const normalizedSearchQuery = removeDiacritics(searchQuery.toLowerCase());
    const normalizedProductName = removeDiacritics(product.name.toLowerCase());
    const normalizedProductType = removeDiacritics(product.type.toLowerCase());
    const normalizedProductSaleType = removeDiacritics(
      product.saleType.toLowerCase()
    );
    if (
      normalizedProductName.includes(normalizedSearchQuery) ||
      normalizedProductType.includes(normalizedSearchQuery) ||
      normalizedProductSaleType.includes(normalizedSearchQuery)
    ) {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
          <div class="product-content">
            <div class="product-img">
              <div class="slideshow-container" id="slideshow_${index}">
                ${(product.imageUrls == undefined ? "" : product.imageUrls)
                  .split(",")
                  .map(
                    (imageUrl, index) =>
                      `<div class="slide ${
                        index === 0 ? "active" : ""
                      }"><img src="${imageUrl}" alt="${
                        product.name
                      }" onclick="enlargeImage('${imageUrl}', '${
                        product.salePrice
                      }đ')"></div>`
                  )
                  .join("")}
                  </div>
                <a class="prev" onclick="changeSlide(${index}, -1)">&#10094;</a>
                <a class="next" onclick="changeSlide(${index}, 1)">&#10095;</a>
              </div>
            </div>

            <div class="product-info">
              <a class="product-name">${product.name}</a>
              <p class="product-price" style="font-size:10px">${
                product.retailPrice
              }</p>
              <p class="product-price" style="color: var(--carribean-green);font-weight:bold;font-size:1.1rem">${
                product.salePrice
              }đ</p>
              <p class="product-price" style="font-size:10px;text-transform: uppercase;">${
                product.type
              }</p>
            </div>

            <div class="off-info">
              <p class="sm-title">-${product.discount}%</p>
            </div>
          </div>
        `;
      const saleInfo = productElement.querySelector(".sm-title");
      if (product.discount >= 50) {
        product.saleType = "BIGSALE";
        saleInfo.textContent = "BIG SALE";
        saleInfo.style.backgroundColor = "#fe5200";
        saleInfo.style.fontWeight = "bold";
      } else if (product.discount === 0) {
        saleInfo.parentElement.remove();
      }
      productsContainer.appendChild(productElement);
    }
  });
}

function changeSlide(index, direction) {
  const slides = document.querySelectorAll(`#slideshow_${index} .slide`);
  const totalSlides = slides.length;

  let currentSlideIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      currentSlideIndex = i;
      slides[i].classList.remove("active");
      break;
    }
  }

  let newSlideIndex = currentSlideIndex + direction;
  if (newSlideIndex < 0) {
    newSlideIndex = totalSlides - 1;
  } else if (newSlideIndex >= totalSlides) {
    newSlideIndex = 0;
  }

  slides[currentSlideIndex].style.opacity = 0;
  slides[newSlideIndex].style.opacity = 1;
  slides[newSlideIndex].classList.add("active");
  slides[newSlideIndex].classList.add("fade");
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    uncheckCheckbox();
    renderProducts(event.target.value, products);
  });

function enlargeImage(imageUrl, productName) {
  var modal = document.getElementById("zoomImg");
  var modalImg = document.getElementById("zoom-img");
  var captionText = document.getElementById("zoom-caption");
  modal.style.display = "block";
  modalImg.src = imageUrl;
  captionText.innerHTML = productName;
  var span = document.getElementsByClassName("zoomClose")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}

function uncheckCheckbox() {
  const checkboxes = document.querySelectorAll(
    '#filter-group input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

//big sale
function renderBigSale() {
  document.querySelector('#ckb-min input[type="checkbox"]').checked = false;
  document.querySelector('#ckb-max input[type="checkbox"]').checked = false;
  var checkBox = document.querySelector('#ckb-big-sale input[type="checkbox"]');
  if (checkBox.checked) {
    renderProducts("BIGSALE", products);
  } else {
    renderProducts("", products);
  }
}

//Tang dan
function renderIncreasePrice() {
  document.querySelector(
    '#ckb-big-sale input[type="checkbox"]'
  ).checked = false;
  document.querySelector('#ckb-max input[type="checkbox"]').checked = false;
  var checkBox = document.querySelector('#ckb-min input[type="checkbox"]');
  if (checkBox.checked) {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const salePriceA = parseFloat(a.salePrice);
      const salePriceB = parseFloat(b.salePrice);
      if (salePriceA < salePriceB) {
        return -1;
      } else if (salePriceA > salePriceB) {
        return 1;
      } else {
        return 0;
      }
    });

    renderProducts("", sortedProducts);
  } else {
    renderProducts("", products);
  }
}

//Giam dan
function renderDecreasePrice() {
  document.querySelector('#ckb-min input[type="checkbox"]').checked = false;
  document.querySelector(
    '#ckb-big-sale input[type="checkbox"]'
  ).checked = false;
  var checkBox = document.querySelector('#ckb-max input[type="checkbox"]');
  if (checkBox.checked) {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const salePriceA = parseFloat(a.salePrice);
      const salePriceB = parseFloat(b.salePrice);
      if (salePriceA > salePriceB) {
        return -1;
      } else if (salePriceA < salePriceB) {
        return 1;
      } else {
        return 0;
      }
    });
    renderProducts("", sortedProducts);
  } else {
    renderProducts("", products);
  }
}

function findOffset(element) {
  var top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById("sticky-scroll");
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add("sticky");
    } else {
      stickyHeader.classList.remove("sticky");
    }
  };
};

const button = document.querySelector(".scroll-to-top");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();
