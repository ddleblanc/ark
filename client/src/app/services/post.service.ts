import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  types = ['book', 'documentary', 'quote', 'article']

  posts = [
    {
      _id: 0,
      user: "Dayz",
      author: "Aldous Huxley",
      title: "Brave New World",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      summary: "Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a utopian society that goes challenged only by a single outsider.",
      image: "https://images-na.ssl-images-amazon.com/images/I/91e-zS-ZoXL.jpg",
      tags: ["They Live", "Obey"],
      type: "book"
    },
    {
      _id: 1,
      user: "Know More News",
      author: "George Orwell",
      title: "1984",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://media0.giphy.com/media/OIu3fg1r9tAJ2/giphy.gif?cid=790b7611d7d1076864b016b218417becc0dc2901a2f42c8a&rid=giphy.gif",
      tags: ["Orwellian", "Brave New World"],
      type: "book"

    },
    {
      _id: 2,
      user: "lxblvnc",
      author: "Amit Dave",
      title: "School children attend a yoga session at a camp in Ahmedabad, India.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a00cb577f986543008b4659-960-657.jpg",
      type: "article"
    },
    {
      _id: 3,
      user: "On Point Preparedness",
      author: "David W Cerny",
      title: "A man climbs a wall of ice in the city of Liberec, Czech Republic.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a21648c3339b01d008b4574-960-626.jpg",
      type: "article"
    },
    {
      _id: 4,
      user: "reallygraceful",
      author: "David W Cerny",
      title: "Kandy Freeman participates in a Black Lives Matter protest in front of Trump Tower in New York City.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a00e71314e5aa27008b47a9-960-641.jpg",
      type: "article"
    },
    {
      _id: 5,
      user: "RISE",
      author: "Nacho Doce",
      title: "Residents and tourists enjoy the sea at Barra da Tijuca beach during a summer day in Rio de Janeiro, Brazil.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a216ec93339b063058b457e-960-557.jpg",
      type: "article"
    },
    {
      _id: 6,
      user: "Steven Bancarz",
      author: "Mohammad Ismail",
      title: "Hanifa Doosti (center), 17, and other students of the Shaolin Wushu club show their Wushu skills to other students on a hilltop in Kabul, Afghanistan.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a00f27614e5aacd0f8b474c-960-651.jpg",
      type: "article"
    },
    {
      _id: 7,
      user: "StormCloudsGathering",
      author: "Jason Reed",
      title: "Switzerland's Roger Federer holds up the trophy after winning his men's singles final match against Spain's Rafael Nadal during the Australian Open, Melbourne, Australia.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a1f0c593339b01f008b462a-960-656.jpg",
      type: "article"
    },
    {
      _id: 8,
      user: "ChristianPrince",
      author: "Christopher Polk",
      title: "Beyonce performs at the 59th Grammy Awards in Los Angeles, California.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
      image: "https://amp.insider.com/images/5a01c9e78ed9e524008b4676-960-592.jpg",
      type: "article"
    },
    {
      _id: 9,
      user: "TheCrowHouse",
      author: "Dayz Of Noah",
      title: "THE MALE THOT: A Documentary (2019)",
      image: "https://cdn.lifehack.org/wp-content/uploads/2014/09/man-on-a-wire.jpg",
      video: "https://www.youtube.com/embed/v8Sah9PoXeA",
      type: "documentary",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim."
    },
    {
      _id: 10,
      user: "TruthStreamMedia",
      author: "Aldous Huxley",
      title: "A Documentary (2019)",
      quote: "You shall know the truth and the truth shall make you mad.",
      image: "https://source.unsplash.com/random",
      video: "https://www.youtube.com/embed/v8Sah9PoXeA",
      type: "documentary",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim."
    }
  ]

  constructor() { }

  getPosts() {
    return this.posts
  }
  getPostById(id) {
    let post = this.posts.filter(post => {
      return post._id == id;
    })
    return post[0];
  }
}

