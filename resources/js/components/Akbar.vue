<template>
  <div class="mainContainer">
    <div class="main">
      <div v-if="showPopup">
        <AkbarPopup
          :passage1="Akbar"
          v-on:submit-passage="submit"
          v-on:close-popup="closepopup"
        />
      </div>
      <div class="leftSide" v-bind:class="showClass ? 'active' : ''">
        <div class="header">
          <div class="userImg">
            <img src="/images/akbar.png" class="cover" />
          </div>
          <ul class="nav_icons">
            <li><ion-icon name="scan-circle-outline"></ion-icon></li>
            <li><ion-icon name="chatbox"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
          </ul>
        </div>
        <!-- Search  -->
        <div class="search-chat">
          <div>
            <input
              type="text"
              placeholder="Search"
              id="search"
              @input="search"
            />
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <!-- Chat list -->
        <div v-for="(expert, index) in experts" :key="index">
          <div class="chatList" v-if="filtersShow === false">
            <div
              class="block"
              @click="selectUser(expert.name)"
              :class="{ selectUser: expert.name === user }"
            >
              <div class="imgbox">
                <img src="/images/akbar.png" class="cover" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>{{ expert.name }}</h4>
                  <p class="time">{{ expert.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="filter in filters" :key="filter.name">
          <div class="chatList">
            <div class="block" @click="selectUser(filter.name)">
              <div class="imgbox">
                <img src="/images/akbar.png" class="cover" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>{{ filter.name }}</h4>
                  <p class="time">{{ filter.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->

      <div class="rightSide" v-bind:class="showClass ? '' : 'active'">
        <div class="header">
          <div class="userText">
            <ion-icon @click="back" name="arrow-back-outline"></ion-icon>
            <div class="userImg">
              <img src="/images/akbar.png" class="cover" />
            </div>
            <h4>
              {{ user }} <br /><span>{{ status }}</span>
            </h4>
          </div>
          <ul class="nav_icons">
            <li><ion-icon @click="upload" name="push-outline"></ion-icon></li>
            <li><ion-icon name="search-outline"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
          </ul>
        </div>

        <!-- chat box -->
        <div id="chatboxid" class="chatbox" v-chat-scroll>
          <div v-for="(ques, indx) in questionHistory" :key="indx">
            <div class="message my_message">
              <p>
                {{ ques.question }} <span>{{ ques.time }}</span>
              </p>
            </div>
            <div class="message server_message">
              <p class="hello" v-if="ques.ans == ''">
                <span class="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </span>
              </p>
              <p class="hello" v-if="ques.ans != ''">
                {{ ques.ans }}<span>{{ ques.time }}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- chat input box -->
        <div class="chatbox_input">
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="attach-outline"></ion-icon>
          <input
            id="data"
            type="text"
            @input="sendBtnCheck"
            v-on:keyup.enter="saveItem"
            placeholder="Type here ... "
          />
          <ion-icon v-if="send" name="send" @click="saveItem"></ion-icon>
          <ion-icon v-if="send === false" name="mic"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AkbarPopup from "./akbarPopup.vue";
export default {
  components: {
    AkbarPopup,
  },
  data() {
    return {
      showBackIcon: false,
      showClass: false,
      filtersShow: false,
      send: false,
      filters: [],
      experts: [{ name: "Akbar", time: "" }],
      status: "",
      user: "",
      questionHistory: [],
      data: "",
      url: "",
      loader: false,
      showPopup: false,
      Akbar:
        "Akbar the Great was born on 14 October 1542, at the Rajput Fortress of Umerkot in Sindh. He was the son of Humayun and his wife Hamida Banu Begum. Akbar was born at a time when his parents were in exile. Akbar spent his entire childhood learning how to fight and hunt. He had no interest in learning how to read and write. However, Akbar was the only Moghul Emperor who was illiterate and still had a penchant for knowledge.Akbar was made king at the age of 13, after the death of his father. Akbar was with Bairam Khan at the time of his father’s passing and Bairam was made Regent, as Akbar was too young. On many occasions Bairam led campaigns on Akbar’s behalf to expand the kingdom.Hemu, the Hindu minister of an Afghan Prince, Adil Shah, was waiting for a chance to defeat Akbar. Hemu attacked the kingdom of Delhi and emerged victorious, crowning himself ruler of Delhi. Akbar launched a scathing attack in the Second Battle of Panipat. The two armies fought valiantly and it seemed as the Moghuls were fighting a losing battle until an arrow hit Hemu’s eye and he fainted. Hemu’s men thought that he was dead and put down their weapons, accepting defeat. Akbar became king again. As Akbar grew older, he won many more battles and added more regions to his kingdom, stretching from the Indo-Ganges Basin to Kashmir and Afghanistan, all the way down to Bengal in the east and part of Deccan in the south.Although Akbar was a young king, he was a shrewd and organised. He got rid of all his ministers who he felt were too ambitious and were looking to covet his position. He removed restrictions on religions and allowed his people to practice the religion of their choice, without having to fear for their life.Akbar was fair to his people and abolished unfair taxes on non-Muslims. He also played an important role in bringing in social reforms such as the abolishment of child marriage, permission for widows to re-marry and the removal of bans to build Hindu temples.Although illiterate, Akbar was surrounded by scholars such as Birbal, Abul Fazl and Tansen who were all part of the Nine Gems or Navaratnas. Akbar took keen interest in religion, music, painting, poetry and philosophy.He had a huge collecting of books and manuscripts and was also the owner of a number of artworks from across the region. His biggest accomplishment however, lay in architecture. He built great structures like the Jama Masjid that stands tall even today. He even built a palace for his wife close to the Hawa Mahal.Akbar fathered three sons, Jahangir, Murad and Daniyal. Jahangir was the only surviving son as the other two died very young. Jahangir and Akbar did not share a very good relationship and were at constant logger-heads with each other.In 1605, Akbar fell very ill and died a slow death. He had managed to bring parts of East, West, North as well as South India under his rule. Akbar’s rule is greatly noted for the wealth of learning and culture that existed in his time. He was also admired for his bravery and wisdom.",
    };
  },
  created() {
    axios
      .get("/hello/akbar")
      .then((response) => (this.url = response.data[0]["url"]));
  },

  methods: {
    closepopup() {
      this.showPopup = false;
    },
    upload() {
      this.showPopup = true;
    },
    submit(passage) {
      if (passage === "") {
      } else {
        this.Akbar = passage;
        this.showPopup = false;
      }
    },
    addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    findTime() {
      const currentDate = new Date();
      const hours = this.addZero(currentDate.getHours());
      const minutes = this.addZero(currentDate.getMinutes());
      const time = hours + ":" + minutes;
      return time;
    },
    sendBtnCheck() {
      let sendValue = document.getElementById("data").value;
      if (sendValue !== "") {
        this.send = true;
      } else {
        this.send = false;
      }
    },
    search() {
      let searchValue = document.getElementById("search").value;
      if (searchValue === "") {
        this.filtersShow = false;
      } else {
        this.filtersShow = true;
      }
      this.filters = this.experts.filter((ele) => {
        return ele.name === searchValue;
      });
    },
    back() {
      this.showClass = !this.showClass;
    },
    selectUser(user) {
      this.showClass = !this.showClass;
      this.status = "Online";
      this.user = user;
    },

    async saveItem() {
      if (this.user === "") {
      } else if (this.user === "Akbar") {
        let time = this.findTime();
        this.experts.map((ele) => {
          if (ele.name === this.user) {
            ele.time = time;
          }
        });
        let typedMessage = document.getElementById("data").value;
        let newQues = { question: typedMessage, ans: "", time: time };
        this.questionHistory.push(newQues);
        document.getElementById("data").value = "";
        this.loader = true;
        axios
          .get(this.url + "/ask?q=" + typedMessage + "&&p=" + this.Akbar)
          .then((response) => {
            this.data = response.data;
            let len = this.questionHistory.length;
            this.questionHistory[len - 1].ans = this.data;
            this.loader = false;
            this.send = false;
          });
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    #009688 0%,
    #009688 130px,
    #d9dbd5 130px,
    #d9dbd5 100%
  );
}
.main {
  position: relative;
  width: 95%;
  margin: 0 auto 0;
  max-width: 100%;
  height: calc(100vh - 40px);
  background: #ffff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);
  display: flex;
}
.main .leftSide {
  position: relative;
  width: 30%;
  flex: 30%;
  background: #ffff;
  border-right: 1px solid #000;
}
.main .rightSide {
  position: relative;
  width: 70%;
  flex: 70%;
  background: #e5ddd5;
}


.header {
  position: relative;
  width: 100%;
  height: 60px;
  background: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.userImg {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav_icons {
  display: flex;
}
.nav_icons li {
  display: flex;
  list-style: none;
  cursor: pointer;
  color: #51585c;
  font-size: 1.5em;
  margin-left: 22px;
}
.search-chat {
  position: relative;
  width: 100%;
  height: 50px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}
.search-chat div {
  width: 100%;
}
.search-chat div input {
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 6px;
  height: 38px;
  border-radius: 30px;
  font-size: 14px;
  padding-left: 40px;
}
.search-chat div input::placeholder {
  color: #bbb;
}
.search-chat div ion-icon {
  position: absolute;
  left: 30px;
  top: 17px;
  font-size: 1.2em;
}
.chatList {
  position: relative;
  height: calc(100% - 110px);
  overflow: auto;
  /* background: #ff0; */
}
.chatList .block {
  position: relative;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.selectUser {
  background: #aaa8a6;
}
.chatList .block .imgbox {
  position: relative;
  width: 45px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.chatList .block .details {
  position: relative;
  width: 100%;
}
.chatList .block .details .listHead {
  display: flex;
  margin-left: 10px;
  justify-content: space-between;
  margin-bottom: 5px;
}
.chatList .block .details .listHead h4 {
  font-size: 1.1em;
  font-weight: 600;
  color: #111;
}
.chatList .block .details .listHead .time {
  font-size: 0.75em;
  color: #aaa;
}

/* right Side */
.userText {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userText ion-icon {
  font-size: 25px;
  font-weight: 500;
  margin-right: 10px;
  display: none;
}
.userText h4 {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2em;
  margin-left: 15px;
}
.userText span {
  font-size: 0.8em;
  color: #555;
}

.chatbox {
  position: relative;
  width: 100%;
  height: calc(100% - 135px);
  padding: 5px 30px;
  overflow-y: auto;
}
.message {
  position: relative;
  display: flex;
  width: 100%;
  margin: 5px 0;
}
.message p {
  position: relative; 
  /* right: 0; */
  text-align: left;
  max-width: 65%;
  
  padding: 6px 7px 8px 9px;
  background: #dcf8c6;
  border-radius: 10px;
  font-size: 0.9em;
  display: block;
}
.my_message p::before {
  content: "";
  position: absolute;
  top: 0;
  right: -12px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    #dcf8c6 0%,
    #dcf8c6 50%,
    transparent 50%,
    transparent
  );
}

.message span {
  /* display: block; */
  float: right;
  margin: 10px 0 -10px 35px;
  font-size: 0.85em;
  opacity: 0.5;
  padding: 0;
}
.my_message {
  justify-content: flex-end;
}
.server_message {
  justify-content: flex-start;
}
.server_message p {
  background: #fff;
  text-align: left;
}
.server_message .hello::before {
  content: "";
  position: absolute;
  top: 0;
  left: -12px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    225deg,
    #fff 0%,
    #fff 50%,
    transparent 50%,
    transparent
  );
}
.chatbox_input {
  position: relative;
  width: 100%;
  background: #f0f0f0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chatbox_input ion-icon {
  cursor: pointer;
  font-size: 1.8em;
  color: #51585c;
}
.chatbox_input ion-icon:nth-child(1) {
  margin-right: 15px;
}
.chatbox_input input {
  position: relative;
  width: 90%;
  margin: 0 20px;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-size: 1em;
  border-radius: 30px;
}

/* dot loader */
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;
}
.lds-ellipsis div {
  position: absolute;

  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

/* dot loader end */

@media only screen and (max-width: 600px) {
  .main {
    margin: 0px;
    width: 100%;
    height: calc(100vh - 0px);
    border: none;
  }
  .main .leftSide {
    border-right: none;
  }
  .active {
    display: none;
  }
  .userText ion-icon {
    display: flex;
  }
}
</style>