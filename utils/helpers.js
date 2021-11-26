import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialData } from "./data";
import * as Notifications from "expo-notifications";
export const UDACIFLASHCARDS = "UdaciFlachcards:cards";
export const NOTIFICATION_KEY = "UdaciFlachcards:notifications";
export const formatDeck = (title) => ({
  title: title,
  questions: [],
});
export const formatAnsweredQuestion = ({ question, answer, answerStatus }) => ({
  question,
  answer,
  answerStatus,
  isAnswered: true,
});

export const setDummyData = () => {
  return AsyncStorage.getItem(UDACIFLASHCARDS).then((res) => {
    if (!res) {
      return AsyncStorage.setItem(UDACIFLASHCARDS, JSON.stringify(initialData))
        .then((res) => {
          //   console.log("Set dummy", res);
          return initialData;
        })
        .catch((err) => console.log(err));
    }
  });
};

export const clearLocalNotifications = async () => {
  return await AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .catch((err) => {
      console.warn("Clear Notification error", err);
    });
};
const createNotifications = () => {
  return {
    title: "Quiz Alert!",
    body: "👋 Don't forget to take your quiz for today",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
};
export const setLocalNotifications = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        // Ask for permission from user
        Notifications.requestPermissionsAsync()
          .then(({ status }) => {
            if (status === "granted") {
              //cancell all initial notifications
              Notifications.cancelAllScheduledNotificationsAsync().catch(
                (err) => {
                  console.warn("Cancel Notification error", err);
                }
              );

              // Declear tomorrow for next notification
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setHours(0);

              // Schedule New Notification
              Notifications.scheduleNotificationAsync({
                content: createNotifications(),
                trigger: {
                  channelId: "default",
                  seconds: 24 * 60 * 60,
                  repeats: true,
                },
              }).catch((err) => {
                console.warn("Shedule Notification error", err);
              });

              // Create notification key in storage
              AsyncStorage.setItem(
                NOTIFICATION_KEY,
                JSON.stringify(true)
              ).catch((err) => console.warn("Store Notification error", err));
            }
          })
          .catch((err) => {
            console.warn("Notification Permission error", err);
          });
      }
    });
};
