import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../../data-access/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe],
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .post__card {
        height: 270px;
        max-height: 270px;
        max-width: 400px;
        margin-block-end: 1rem;
        margin-inline-end: 1rem;
      }
      .post__card-content {
        padding-block-start: 1rem;
      }
    `,
  ],
})
export class PostComponent {
  @Input({ required: true }) post!: Post;
}
