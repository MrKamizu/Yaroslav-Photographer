import React from "react";
import HeroSection from "../components/main/HeroSection";
import { albumImagesList } from "../components/mock/albumImagesList";
import AlbumBlock from "../components/albums/AlbumElement";

/**
 * Сторінка альбомів
 */
const ArtGallery = () => {
  return (
    <>
      {/* Відображення головної секції на сторінці */}
      <HeroSection />

      <div className="mx-6 my-[30px]">
        <div className="flex flex-wrap gap-6">
          {/* Мапінг через список альбомів для відображення блоків альбомів */}
          {albumImagesList.map((album, index) => (
            <AlbumBlock
              key={index}
              // Передача даних про альбом до компонента AlbumBlock
              albumURL={album.albumURL}
              title={album.titleAlbum}
              mainImage={album.mainImageUrl}
              images={album.imageUrls}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtGallery;
