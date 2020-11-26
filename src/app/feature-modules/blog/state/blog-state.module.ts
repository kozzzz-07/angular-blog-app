import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBlogState from './reducers';
import * as fromBlog from './reducers/blog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './effects/blog.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBlogState.blogStateFeatureKey,
      fromBlogState.reducers,
      { metaReducers: fromBlogState.metaReducers }
    ),
    // StoreModule.forFeature(fromBlog.blogFeatureKey, fromBlog.blogReducer),
    EffectsModule.forFeature([BlogEffects]),
  ],
})
export class BlogStateModule {}
