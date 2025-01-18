import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';
type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  // const [hasError, setError] = useState(false);

  const handleTitle = (val: string) => {
    setTitle(val);
  };

  const handleDescription = (val: string) => {
    setDescription(val);
  };

  const handleImgUrl = (val: string) => {
    setImgUrl(val);
  };

  const handleImdbUrl = (val: string) => {
    setImdbUrl(val);
  };

  const handleImdbUId = (val: string) => {
    setImdbId(val);
  };

  const trimedTitle = title.trim();
  const trimedDescription = description.trim();
  const trimedImgUrl = imgUrl.trim();
  const trimmedImdbUrl = imdbUrl.trim();
  const trimmedImdbId = imdbId.trim();

  const newMovie = {
    title: trimedTitle,
    description: trimedDescription,
    imgUrl: trimedImgUrl,
    imdbUrl: trimmedImdbUrl,
    imdbId: trimmedImdbId,
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (trimedTitle || trimedImgUrl || trimmedImdbUrl || trimmedImdbId) {
      onAdd(newMovie);
    }

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
    setCount(prev => prev + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={handleDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={handleImgUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={handleImdbUId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={
              !trimedTitle || !trimedImgUrl || !trimmedImdbUrl || !trimmedImdbId
            }
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
