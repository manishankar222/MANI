.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search {
  margin-bottom: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 749px) {
  .card {
    width: calc(50% - 10px);
  }
}

@media only screen and (min-width: 750px) and (max-width: 949px) {
  .card {
    width: calc(33.33% - 10px);
  }
}

@media only screen and (min-width: 950px) {
  .card {
    width: calc(25% - 10px);
  }
}
