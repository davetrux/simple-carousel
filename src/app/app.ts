import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ScrollDirection} from './ScrollDirection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public placeholderText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nulla blandit lectus pellentesque molestie. Nunc commodo, magna quis tempor consequat, augue risus dignissim lorem, non consectetur dui augue quis ligula. Aliquam lobortis finibus mi, tincidunt egestas ex efficitur et. Nam ultricies odio et ullamcorper placerat. Phasellus vestibulum pellentesque auctor. Sed sit amet vehicula arcu. Nulla sit amet mauris in metus venenatis consequat. Sed metus magna, ultrices non euismod ut, vestibulum in velit. Mauris luctus tortor in nulla suscipit eleifend. Quisque fermentum massa in nibh scelerisque, at consequat nisl ultricies. Quisque et malesuada leo. Nulla malesuada ultrices leo vel elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra massa laoreet neque tincidunt tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel bibendum est, in pellentesque nisi.',
    'Nam a dui malesuada, rhoncus velit ut, sodales mauris. Vivamus nulla urna, lobortis vitae cursus vitae, vehicula at lacus. Maecenas vestibulum, justo in efficitur porta, augue libero posuere sem, sit amet sodales massa ex eget dolor. Suspendisse pulvinar diam a justo aliquam, sit amet egestas neque molestie. Fusce dui mi, semper laoreet urna quis, sodales aliquet elit. Nullam tristique leo id mi gravida maximus. Quisque mattis ligula sed dolor imperdiet, sit amet tempor risus volutpat. Ut ut erat cursus, aliquet nibh a, consectetur nunc. Vivamus posuere ultricies turpis sit amet pellentesque.',
    'Etiam ut erat eu turpis consequat vulputate eget et quam. Maecenas condimentum non leo eu luctus. Etiam non diam quis ligula pulvinar tempor. Morbi mauris dui, scelerisque id pulvinar in, consectetur in tellus. Nunc maximus sem et ipsum laoreet lobortis. Cras fringilla lacus sed consectetur ornare. Vestibulum convallis orci et elit condimentum lacinia. Ut consequat eros mauris, vel feugiat sem fringilla in. Suspendisse sodales nulla arcu, sed lobortis dui placerat non. Donec fermentum sapien dui, ac convallis ex rhoncus consequat. Morbi pharetra semper libero, a tristique nisl cursus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    'Aliquam mauris diam, fringilla in arcu vitae, consectetur imperdiet tellus. Proin in laoreet sem. Sed fermentum dolor nulla. Integer molestie dui sed turpis vulputate, imperdiet porta augue vulputate. Mauris ac placerat erat, sed sollicitudin dui. Quisque aliquet neque ut ante porttitor, id vehicula ipsum egestas. Mauris arcu metus, sodales eu congue in, volutpat ut ex. Donec sagittis, metus vel consequat vestibulum, justo arcu hendrerit magna, at pulvinar urna orci ut nunc. Phasellus purus urna, egestas vestibulum viverra eget, convallis eu sem. Nunc iaculis velit vel ante iaculis consequat. Etiam nec nisl et erat volutpat sagittis. Vivamus in varius leo. Phasellus tellus orci, vestibulum in auctor eget, congue et tortor. Morbi blandit lorem a finibus laoreet. Vivamus ut libero ultrices, blandit sem vitae, lobortis est.',
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nibh dui, bibendum sit amet aliquam quis, euismod at nulla. Praesent sagittis, ligula in eleifend mollis, turpis turpis imperdiet elit, eu tempor tellus eros at ex. Ut condimentum, tellus ut commodo viverra, risus est egestas eros, at aliquam elit ipsum iaculis massa. Duis imperdiet in justo nec porta. Aliquam nec iaculis tortor, in aliquet eros. Vestibulum eu condimentum tellus. Ut commodo facilisis vestibulum. Vestibulum porta libero nunc, nec finibus erat pharetra vel. Praesent eu leo sit amet diam finibus facilisis sed id mi. Sed tincidunt est vitae sagittis lacinia. Sed sed nibh vitae metus aliquet imperdiet. Aenean varius aliquet lacus, sed fringilla ligula lacinia vel. Etiam quis enim id neque pellentesque pretium. Nullam ac nisl ut ante ornare congue sed a nibh.',
    'Nulla sit amet libero nec sapien malesuada tincidunt. Aliquam scelerisque tortor justo, et vestibulum odio vehicula eget. Vestibulum non turpis non lorem molestie finibus. Cras tincidunt ultricies nunc, at volutpat sapien tempor sit amet. Sed in enim in lectus feugiat placerat vitae vel ipsum. Ut vulputate ligula sed neque dapibus efficitur. Nam hendrerit gravida nisl, ac euismod risus gravida at. Aenean lacinia elementum mi id commodo. Pellentesque quis lacinia ante. Nullam dictum libero ut suscipit facilisis. Donec tempor velit non nisi pulvinar porttitor. Donec ut metus ultricies erat tristique porttitor. Nunc interdum euismod ante non faucibus. Nulla vitae tortor nec sem rhoncus laoreet. Curabitur vitae commodo velit.'
  ]

  @ViewChild('carousel') carouselContainer!: ElementRef<HTMLDivElement>;

  scroll(direction: ScrollDirection): void {
    const container = this.carouselContainer.nativeElement;

    // Get the width of the visible container
    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === ScrollDirection.Left ? -scrollAmount/2 : scrollAmount/2,
      behavior: 'smooth'
    });
  }

  protected readonly ScrollDirection = ScrollDirection;
}
