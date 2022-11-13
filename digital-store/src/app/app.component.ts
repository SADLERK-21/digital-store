import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-store';
}
export class Natasha {
  private emotion: Emotion = Emotion.Sad;
  private appearance: Appearance = Appearance.HollyShitSheLookLikeBeautyGoddess;
  private intelligence: string = "Powerfull";
  private favoriteMusic: string = "Always Valery music";

  public askNatasha(question: string): string {
    switch (question) {
      case "How are you":
        return "i'm tired";
      case "Will you marry me":
        return "Yes";
      default: return "Always yes";
    }
  }
}

export enum Emotion {
  Good,
  Normal,
  Sad
}

export enum Appearance {
  HollyShitSheLookLikeBeautyGoddess,
  Awesom,
  Good,
  Normal,
  Sad
}