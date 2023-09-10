import React from "react";
import PropTypes from "prop-types";
import ArrowOpenUrl from "../../assets/ArrowOpenUrl.svg";

/**
 * Компонент Альбому
 * @param {string} title - Назва альбому
 * @param {string} mainImage - URL головного зображення альбому
 * @param {string[]} images - Масив URL зображень альбому
 */

const AlbumBlock = ({ albumURL, title, mainImage, images }) => {
  const maxImagesToShow = 9;
  const limitedImages = images.slice(0, maxImagesToShow);

  return (
    <a href={albumURL} target="_blank" rel="noreferrer">
      <div className="w-full max-w-1980 mx-auto px-12 py-3 flex justify-between gap-x-3">
        <div className="flex-1 flex-col justify-between">
          <div className="text-4xl">{title}</div>
          <div className="flex items-center mt-4">
            <div className="p-3 bg-white bg-opacity-5 rounded-full border border-white border-opacity-20">
              <div className="rounded-full">
                <img
                  src={ArrowOpenUrl}
                  alt=""
                  className="max-w-[20px] w-full"
                />
              </div>
            </div>
            <div className="text-center text-stone-100 text-base uppercase tracking-wide ml-4">
              See All
            </div>
          </div>
        </div>

        <div className="flex-1 w-full rounded-2xl overflow-hidden aspect-square">
          <img className="w-full h-full object-cover" src={mainImage} alt="" />
        </div>

        <div className="flex-1 grid grid-cols-3 gap-3">
          {limitedImages.map((imageUrl, index) => (
            <div
              key={index}
              className="w-full max-w-190 rounded-2xl overflow-hidden aspect-square"
            >
              <img
                className="w-full h-full object-cover"
                src={imageUrl}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

AlbumBlock.propTypes = {
  albumURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AlbumBlock;
