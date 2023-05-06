import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
 import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { PostsService } from '../../data-access/posts.service';
import { PostComponent } from '../../ui/post/post.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-container',
  standalone: true,
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    NgClass,
    PostComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule
  ],
})
export class PostsContainerComponent {
  #postsService = inject(PostsService);
  posts = toSignal(this.#postsService.posts$, {
    initialValue: [],
  });
}
