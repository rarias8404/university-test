import React, {useState, useEffect} from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, FormFeedback, Label, Col, Input, Button} from 'reactstrap';
import DatePicker from "reactstrap-date-picker";

const RenderSelect = ({items}) => (
  items.map(item => (
    <option key={item.id} value={item.id}>{item.name}</option>
  ))
);

const StudentsModal = (props) => {
  const [form, setForm] = useState({...props.student});
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    setForm({...props.student});
  }, [props.student]);

  const handleChange = event => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  const handleDateChange = (value) => {
    let data = {...form, birthdate: value}
    setForm(data);
  }

  const isValidName = () => {
    return !(form.name.length < 3 || form.name.length > 20);
  }

  const isValidEmail = () => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email);
  }

  const handleBlur = field => evt => {
    if (field === 'name') {
      if (!isValidName())
        setErrors({...errors, [field]: 'Name should be between 3 and 20 characters'});
      else setErrors({...errors, [field]: ''});
    }
    if (field === 'email') {
      if (!isValidEmail())
        setErrors({...errors, [field]: 'Invalid Email'});
      else setErrors({...errors, [field]: ''});
    }
  }

  const parseDate = (date) => {
    return new Intl.DateTimeFormat('fr-ca', { year: 'numeric', month: 'numeric', day: 'numeric'})
      .format(new Date(Date.parse(date)))
  }

  const handleSubmit = (event) => {
    const {saveStudent, toggle} = props;
    if (isValidName() && isValidEmail()) {
      const student = {...form};
      student.birthdate = parseDate(student.birthdate);
      //calcular edad a partir de la fecha de nacimiento
      student.age = 10;
      saveStudent(student);
    }
    toggle();
    event.preventDefault();
  }

  const handleToggle = () => {
    const {toggle} = props;
    setErrors({
      name: '',
      email: '',
    });
    toggle();
  }

  return (
    <div className="container">
      <div className="row">
        <Modal isOpen={props.isOpen} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>
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
                      value={form.name || ''}
                      valid={errors.name === ''}
                      invalid={errors.name !== ''}
                      onChange={handleChange}
                      onBlur={handleBlur('name')}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" id="email" name="email"
                           placeholder="Email"
                      value={form.email || ''}
                      valid={errors.email === ''}
                      invalid={errors.email !== ''}
                      onChange={handleChange}
                      onBlur={handleBlur('email')}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="sex">Sex</Label>
                      <Input type="select" id="sex" name="sex"
                        value={form.sex || 'female'}
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
                      <DatePicker
                        id="birthdate"
                        name="birthdate"
                        value={form.birthdate || new Date().toISOString()}
                        onChange={(value) => handleDateChange(value)}
                      />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 6}}>
                    <FormGroup>
                      <Label htmlFor="groupId">Group</Label>
                      <Input type="select" id="groupId" name="groupId"
                        value={form.groupId || ''}
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
                        value={form.cityId || ''}
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