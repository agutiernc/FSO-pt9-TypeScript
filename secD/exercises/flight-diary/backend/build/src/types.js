"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Stormy"] = "stormy";
    Weather["Windy"] = "windy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
// ============ Before => Enum section ================
// replaced with an "enum"
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
// export type Visibility = 'great' | 'good' | 'ok' | 'poor';
// export interface DiaryEntry {
//   id: number;
//   date: string;
//   weather: Weather;
//   visibility: Visibility;
//   comment?: string; // added to show this is optional
// }
// // this is a type alias -- ommits the "comment" property from DiaryEntry
// export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
