<script lang="ts">
import Avatar from "@/components/PeopleAvatar.vue";

export default {
  props: ["info"],
  components: {
    Avatar,
  },
};
</script>

<template>
  <div class="profile" :data-id="info.id" :data-team="info.team">
    <div class="avatar-name-holder">
      <avatar :src="info.avatar" :uid="info.id" :name="info.name" class="avatar" />
      <div class="profile-name">{{ info.name }}</div>
    </div>
    <div class="profile-info">
      <div class="profession">
        <span v-if="info.profession">{{ info.profession }}</span>
        <span v-if="info.company && info.profession"> @ </span>
        <span v-if="info.company">{{ info.company }}</span>
      </div>
      <div class="profile-content">
        <slot></slot>
      </div>
      <div class="contacts">
        <div class="address" v-if="info.address">
          🗺️ <span>{{ info.address }}</span>
        </div>
        <div class="phone" v-if="info.phone">
          📞 <span>{{ info.phone }}</span>
        </div>
        <div class="email" v-if="info.email">
          ✉️ <span>{{ info.email }}</span>
        </div>
      </div>
    </div>
    <div class="action-bar">
      <a class="button" v-if="info.href" :href="info.href">More ...</a>
      <a class="button" v-if="info.website" :href="info.website">Website</a>
      <a v-if="!info.resume" :href="'/assets/pdfs/resume/' + info.id + '-resume.pdf'" class="button">Resume</a>
      <a class="button" v-if="info.resume" :href="info.resume">Resume</a>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 1cm;
  flex-direction: column;
}

.profile .avatar-name-holder {
  background-color: var(--color-green);
  border-radius: 50px 5px 5px 50px;
    display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      align-items: stretch;
    }
    
    .profile[data-team="esteghlal"] .avatar-name-holder {
      background-color: var(--color-blue);
    }
    
    .profile[data-team="perspolis"] .avatar-name-holder {
      background-color: var(--color-red);
    }
    
    [lang="fa"] .profile .avatar-name-holder {
      border-radius: 5px 65px 65px 5px;
    }
    
    .profile .avatar-name-holder:dir(rtl) {
      border-radius: 5px 65px 65px 5px;
    }
    
    .profile .avatar-name-holder .avatar {
      max-width: 100px;
      max-height: 100px;
      flex-grow: 0;
      transition-duration: 300ms;
      transition-timing-function: ease-out;
    }
    
    [lang="en"] .profile .avatar-name-holder .avatar {
      transform: scaleX(-1);
    }
    
    [lang="en"] .profile .avatar-name-holder .avatar:hover {
      transform: scaleX(1);
    }
    
    [lang="fa"] .profile .avatar-name-holder .avatar {
      padding-left: 0;
      margin-left: 0;
    }
    
    .profile .avatar-name-holder .avatar:dir(rtl) {
      padding-right: 0;
      margin-right: 0;
      transform: scaleX(-1);
    }
    
    .profile .avatar-name-holder .avatar:dir(ltr) {
      padding-left: 0;
      margin-left: 0;
      transform: scaleX(1);
    }
    
    .profile .avatar-name-holder .profile-name {
      display: flex;
      flex-grow: 1;
      padding: 1mm 1mm;
      font-weight: bolder;
      font-size: 1.2rem;
    
      align-items: center;
      justify-items: center;
    
      align-content: center;
      justify-content: center;
    
      text-align: center;
    }
    
    .profile .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      flex-grow: 2;
      width: 100%;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    
    .profile .profile-info div {
      justify-content: center;
    }
    
    .profile .profession {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-align: center;
      justify-content: center;
    }
    
    .profile>.profile-info>.contacts {
      display: flex;
      flex-direction: row;
      font-size: 0.8em;
      font-weight: normal;
      white-space: nowrap;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: space-between;
    }
    
    .profile>.profile-info>.contacts div {
      padding: 2px;
      margin: 1px;
    }
    
    .profile>.profile-info>.contacts>div:first-letter {
      transition-timing-function: ease;
      transition: ease;
      transition-duration: 0.5s;
      background-color: var(--icon-animation-background-1);
      font-size: large;
      padding: 5px 5px 5px 5px;
      border-radius: 4px;
}

.profile > .profile-info > .contacts > div:hover:first-letter {
  transition-timing-function: ease;
  transition: ease;
  transition-duration: 0.5s;
  transform: scaleX(2);
  background-color: var(--icon-animation-background-2);
}

.profile > .profile-info > .contacts .address {
  color: var(--color-text);
  white-space: pre-wrap;
}

.profile > .profile-info > .contacts .phone {
  color: var(--color-text);
  white-space: nowrap;
}

.profile > .profile-info > .contacts .phone span {
  direction: ltr;
  display: inline-flex;
}

.profile > .profile-info > .contacts .email {
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile > .profile-info > .contacts .email span {
  direction: ltr;
  display: inline-flex;
}

.profile .profile-content {
  font-size: small;
  padding: 1cm 1rem;
}
</style>

<style>
.action-bar {
  width: 100%;
  display: flex;
  margin-top: 1rem;
  gap: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: row-reverse;
  justify-items: stretch;
  align-items: stretch;
  flex-wrap: wrap-reverse;
}

.action-bar a {
  display: flex;
}

.action-bar a.button {
  min-width: 80px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 5px;
  border-color: var(--color-border);
  border-style: solid;
  border-width: 1px;
  font-size: 0.8rem;
  flex-grow: 1;
}

.action-bar a.button:hover {
  border-color: var(--color-border-hover);
}
/* rgba(204, 204, 204, 0.5); */
/*rgba(24, 24, 24, 0.5);*/

/* background-color: rgba(0, 255, 127, 0.5);  Green*/
/* background-color: rgba(0, 191, 255, 0.5); Blue*/
/* background-color: rgba(255, 0, 0, 0.6); Red*/
</style>
