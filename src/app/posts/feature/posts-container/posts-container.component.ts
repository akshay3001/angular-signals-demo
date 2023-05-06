import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PostsService } from '../../data-access/posts.service';
import { PostComponent } from '../../ui/post/post.component';

@Component({
  selector: 'app-posts-container',
  standalone: true,
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
  imports: [
    CommonModule,
    PostComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class PostsContainerComponent {
  #postsService = inject(PostsService);
  posts = toSignal(this.#postsService.posts$, {
    initialValue: [],
  });
}
