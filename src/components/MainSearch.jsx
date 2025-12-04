import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getJobsSearchedAction } from '../redux/actions';

const MainSearch = () => {
  const [queryValue, setQueryValue] = useState('');

  const dispatch = useDispatch();
  const jobsPool = useSelector((currentState) => {
    return currentState.jobs.pool;
  });
  const loading = useSelector((currentState) => {
    return currentState.jobs.loading;
  });
  const error = useSelector((currentState) => {
    return currentState.jobs.error;
  });

  const handleChange = (e) => {
    setQueryValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsSearchedAction(queryValue));
  };

  console.log('jobspool: ', jobsPool);

  return (
    <Container>
      <Row className="flex-column">
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={queryValue}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col className="text-center my-3">
          {loading && <Spinner variant="info" animation="grow"></Spinner>}
          {error && <Alert variant="danger">errore nel caricamento</Alert>}
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsPool?.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
