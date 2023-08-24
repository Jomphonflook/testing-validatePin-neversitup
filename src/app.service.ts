import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validatePin(pin: any): any {
    const cleanedPin = pin.trim();
    const result = /^[0-9]{6,}$/.test(cleanedPin);
    if (!result) {
      return "pin less than 6 or invalid pin number"
    }
    let checkGroup = 0
    for (let i = 0; i < cleanedPin.length; i++) {
      if (
        cleanedPin[i] === cleanedPin[i + 1] &&
        cleanedPin[i] === cleanedPin[i + 2]
      ) {
        return "เลขตอง !";
      }

      if (cleanedPin[i] == cleanedPin[i + 1] - 1 && cleanedPin[i] == cleanedPin[i + 2] - 2) {
        return "เลขเรียงกันเกิน 2 ตัว"
      }

      if (cleanedPin[i] == cleanedPin[i + 1]) {
        checkGroup += 1
        if (checkGroup > 2) {
          return "เลขชุดเกิน  2 ชุด"
        }
      }
    }
    return "PIN ใช้งานได้"
  }
}
