import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const MainUrl = `https://api.unsplash.com/photos/`;
const Search = `https://api.unsplash.com/search/photos/`;

//api.unsplash.com/search/photos/?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8&query=
function Fetching() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const fetchImages = async () => {
    let url;
    const urlPage = `&page=${page}`;
    url = `${MainUrl}?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8${urlPage}`;
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      setPhoto((oldPhoto) => {
        return [...oldPhoto, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const searchFetch = async () => {
    let url;
    const urlSerch = `&query=${query}`;
    const urlPage = `&page=${page}`;
    url = `${Search}?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8${urlSerch}${urlPage}`;
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      setPhoto((oldPhoto) => {
        if (page === 1) {
          console.log(data);
          return [...data.results];
        } else {
          return [...oldPhoto, ...data.results];
        }
      });
      setSearching(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (searching) {
      searchFetch();
    } else {
      fetchImages();
    }
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setPage(1);
    searchFetch();
    // console.log("hay");
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        console.log(`innerHeight ${window.innerHeight}`);
        console.log(`scroll ${window.scrollY}`);
        console.log(`height ${document.body.scrollHeight}`);
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  return (
    <main>
      <section className="search">
        <form className="search form">
          <input
            className="form-input"
            type="text"
            placeholder="search..Explore the world"
            onChange={handleChange}
            value={query}
          />
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default Fetching;
