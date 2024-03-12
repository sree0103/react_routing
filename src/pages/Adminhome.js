import React from "react";

export default function Admin() {
  return (
    <div>
      <h1>Admin Home</h1>
      <form action="newsong">
        <input type="submit" value="ADD SONGS"></input>
      </form>
      <br />
      <form action="viewsongs">
        <input type="submit" value="VIEW SONGS"></input>
      </form>

      <br />
      <br />

      <form action="createplaylists">
        <input type="submit" value="CREATE PLAYLIST"></input>
      </form>

      <br />
      <br />

      <form action="viewplaylist">
        <input type="submit" value="VIEW PLAYLIST"></input>
      </form>
    </div>
  );
}
