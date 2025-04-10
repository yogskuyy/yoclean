import React from 'react';
import ItemSmall from './ItemSmall';

export default function Index({ data, bookmarkedItems = [], onToggleBookmark }) {
  return (
    <>
      {data.map((item) => (
        <ItemSmall
          key={item.id}
          item={item}
          isBookmarked={bookmarkedItems.some((b) => b.id === item.id)}
          onBookmarkPress={onToggleBookmark}
        />
      ))}
    </>
  );
}
