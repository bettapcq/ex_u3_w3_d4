import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getJobsSearchedAction } from '../redux/actions';

const MainSearch = () => {
  const [queryValue, setQueryValue] = useState('');

  const dispatch = useDispatch();
  const jobsPull = useSelector((currentState) => {
    return currentState.jobs.pull;
  });

  const handleChange = (e) => {
    setQueryValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsSearchedAction(queryValue));
  };

  console.log('jobsPull: ', jobsPull);

  return (
    <Container>
      <Row>
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
        <Col xs={10} className="mx-auto mb-5">
          {jobsPull?.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
