import React, {useState, useEffect} from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, FormFeedback, Label, Col, Input, Button} from 'reactstrap';

const RenderSelect = ({items}) => (
  items.map(item => (
    <option key={item.id} value={item.id}>{item.name}</option>
  ))
);

const StudentsModal = (props) => {
  const [form, setForm] = useState({...props.student});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });

  useEffect(() => {
    setForm({...props.student});
  }, [props.student]);

  const handleChange = event => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  const handleBlur = field => evt => {

  }

  const handleSubmit = (event) => {
    console.log(form);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            {
              form.id ? 'Edit Student' : 'Add New Student'
            }
          </ModalHeader>
          <ModalBody>
            <div className="col-12">
              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name" md={2}>Name</Label>
                  <Col md={10}>
                    <Input type="text" id="name" name="name"
                      placeholder="Name"
                      value={form.name}
                      /*valid={errors.firstname === ''}
                      invalid={errors.firstname !== ''}*/
                           onChange={handleChange}
                           onBlur={handleBlur('name')}
                    />
                    {/*<FormFeedback>{errors.firstname}</FormFeedback>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" id="email" name="email"
                           placeholder="Email"
                      value={form.email}
                      /*valid={errors.email === ''}
                      invalid={errors.email !== ''}*/
                           onChange={handleChange}
                           onBlur={handleBlur('email')}
                    />
                    {/*<FormFeedback>{errors.email}</FormFeedback>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="sex">Sex</Label>
                      <Input type="select" id="sex" name="sex"
                        value={form.sex}
                        onChange={handleChange}
                      >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="birthdate">Birthdate</Label>
                      <Input type="text" id="birthdate" name="birthdate"
                        value={form.birthdate}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="groupId">Group</Label>
                      <Input type="select" id="groupId" name="groupId"
                        value={form.groupId}
                        onChange={handleChange}
                      >
                        <RenderSelect items={props.groups} />
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="cityId">Birthplace</Label>
                      <Input type="select" id="cityId" name="cityId"
                        value={form.cityId}
                        onChange={handleChange}
                      >
                        <RenderSelect items={props.cities} />
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Button type="submit" color="primary">
                      Save
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default StudentsModal;