"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onplay = useOnPlay(songs);
  if (songs.length === 0) {
    return (
      <div
        className="
      flex 
    flex-col 
    gap-y-2 
    w-full 
    px-6 
    text-neutral-400"
      >
        No song found.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex items-center gap-x-4 w-full
      f"
        >
          <div className="flex-1">
            <MediaItem onDoubleClick={(id: string) => onplay(id)} data={song} />
          </div>
          <div>
            <LikeButton songId={song.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
