// page.js

'use client';

import TodoList from './components/TodoList';

export default function HomePage() {
  return (
    <section className="w-full max-w-xl">
      <TodoList />
    </section>
  );
}

