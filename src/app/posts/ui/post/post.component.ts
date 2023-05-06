import { NgClass, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../../data-access/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule, NgClass ,TitleCasePipe],
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input({ required: true }) post!: Post;
  @Input({ required: true }) viewType!: 'grid' | 'list';
}
