import React from 'react';
import TaskForm from './TaskForm.jsx';

export default {
  title: 'Components/TaskForm',
  component: TaskForm,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
    title: { control: 'text' },
  },
};

export const Default = (args) => <TaskForm {...args} />;
Default.args = {
  title: '',
};
