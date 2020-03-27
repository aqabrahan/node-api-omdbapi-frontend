import React, {useState, useEffect} from 'react'
import Page from 'components/Page'
import Card from 'components/Card'
import FieldsSelector from 'components/FieldsSelector'
import { useMovies, useOptions, useOptionsSelected } from '../hooks';
const opts = {
  "Actors": "Actors",
  "Writers": "Writer",
  "Movies": "Title",
  "Directors": "Director"
}
export default () => {
  const options = useOptions();
  const selected = useOptionsSelected();
  const movies = useMovies();

  return <Page title="You are watching our users' movies preferences...">
    <FieldsSelector selected={selected} options={options}/>
    <div className="cards">
    {movies.map((user, i) => {
      const mvs = user.movieDetails;
      let selectedItems = {};
      return <Card
        key={user.name}
        title={user.name}
        avatar={user.avatarUrl}
      >
        {selected.length > 0 && selected.map(select => {
          selectedItems[select] = [];
          {mvs.map(md => {
            selectedItems[select].push(md[opts[select]]);
          })}
        })}
        <div className="select-items">
            {selected.length > 0 && selected.map((s, k) => {
            return <div key={`ii${k}`} className="select-items__item">
              <strong> {s} :</strong> {selectedItems[s]}
            </div>
            })}
        </div>
      </Card>
    })}
    </div>
  </Page>
}

