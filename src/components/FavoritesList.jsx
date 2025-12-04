import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { removeFromFavoritesAction } from '../redux/actions';

const FavoritesList = () => {
  const favoritesArray = useSelector((currentState) => {
    return currentState.favorites.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Your favorites companies: </h1>
          {favoritesArray?.length > 0 ? (
            favoritesArray.map((company, index) => (
              <ListGroup.Item
                key={index}
                style={{ border: '1px solid #00000033', borderRadius: 4 }}
                className="m-2 text-info p-3"
              >
                <MdOutlineFavorite
                  type="button"
                  onClick={() => dispatch(removeFromFavoritesAction(company))}
                />
                <Link to={`/${company}`} className="m-2">
                  {company}
                </Link>
              </ListGroup.Item>
            ))
          ) : (
            <p>Nessun elemento nei preferiti</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesList;
