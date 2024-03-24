import { Button } from '@/components/ui/button';

export default function HomeBlog() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-7xl font-bold'>Hello world!</h1>
      <h2 className='my-5 text-4xl font-bold'>Blog</h2>
      <p className='text-balance my-2 mt-4 max-w-5xl text-center text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quasi tenetur.
        Facilis consequatur quam vero corporis fugit maiores nulla voluptas illum, harum
        quisquam porro tempora, ullam cupiditate. Consequatur quisquam dignissimos
        exercitationem facere quia quaerat, ab adipisci maiores deleniti veritatis quae,
        praesentium culpa cupiditate dolorem libero molestiae odit molestias odio tenetur
      </p>
      <p className='text-balance mt-4 max-w-5xl text-center'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quasi tenetur.
        Facilis consequatur quam vero corporis fugit maiores nulla voluptas illum, harum
        quisquam porro tempora, ullam cupiditate. Consequatur quisquam dignissimos
        exercitationem facere quia quaerat, ab adipisci maiores deleniti veritatis quae,
        praesentium culpa cupiditate dolorem libero molestiae odit molestias odio tenetur
        numquam perferendis sint aliquam ipsam asperiores? Quia repellat maiores ut,
        accusantium quam illum fugit culpa quisquam! Cumque quam eos nostrum quaerat atque
        aspernatur dolore voluptate odio, nulla exercitationem illum, dolorum perferendis
        in iste enim id debitis sint, reiciendis distinctio modi non. Dolore earum
        suscipit cumque libero, quod distinctio cupiditate numquam repellat fugiat vitae
        ipsa harum, possimus dolores id aperiam? Labore ex adipisci deleniti aut itaque
        iusto quisquam, totam dolorum nisi.
      </p>
      <Button variant='default' className='mt-5'>
        Click me
      </Button>
    </main>
  );
}
