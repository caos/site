<style>
.pc-tab > input,
.pc-tab section > div {
  display: none;
}

#tab1:checked ~ section .tab1,
#tab2:checked ~ section .tab2,
#tab3:checked ~ section .tab3 {
  display: block;
}

#tab1:checked ~ nav .tab1,
#tab2:checked ~ nav .tab2,
#tab3:checked ~ nav .tab3 {
  color: red;
}

/* Visual Styles */
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-weight: 100;
  font-size: 60px;
  color: #e74c3c;
}

.pc-tab {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
.pc-tab ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.pc-tab ul li label {
  float: left;
  padding: 15px 25px;
  border: 1px solid #ddd;
  border-bottom: 0;
  background: #eeeeee;
  color: #444;
}
.pc-tab ul li label:hover {
  background: #dddddd;
}
.pc-tab ul li label:active {
  background: #ffffff;
}
.pc-tab ul li:not(:last-child) label {
  border-right-width: 0;
}
.pc-tab section {
  clear: both;
}
.pc-tab section div {
  padding: 20px;
  width: 100%;
  border: 1px solid #ddd;
  background: #fff;
  line-height: 1.5em;
  letter-spacing: 0.3px;
  color: #444;
}
.pc-tab section div h2 {
  margin: 0;
  letter-spacing: 1px;
  color: #34495e;
}

#tab1:checked ~ nav .tab1 label,
#tab2:checked ~ nav .tab2 label,
#tab3:checked ~ nav .tab3 label {
  background: white;
  color: #111;
  position: relative;
}
#tab1:checked ~ nav .tab1 label:after,
#tab2:checked ~ nav .tab2 label:after,
#tab3:checked ~ nav .tab3 label:after {
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffffff;
  left: 0;
  bottom: -1px;
}

</style>

<div class="pc-tab">
<input checked="checked" id="tab1" type="radio" name="pct" />
<input id="tab2" type="radio" name="pct" />
<input id="tab3" type="radio" name="pct" />
  <nav>
    <ul>
      <li class="tab1">
        <label for="tab1">First Tab</label>
      </li>
      <li class="tab2">
        <label for="tab2">Second Tab</label>
      </li>
      <li class="tab3">
        <label for="tab3">Third Tab</label>
      </li>
    </ul>
  </nav>
  <section>
    <div class="tab1">
      <h2>First</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus itaque quidem minus nostrum, voluptatem accusamus aspernatur quia harum ratione, officia laudantium inventore autem doloribus atque labore numquam non. Hic, animi.</p>
    </div>
    <div class="tab2">
      <h2>Second</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error repellendus officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
    </div>
    <div class="tab3">
      <h2>Third</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum aliquid.</p>
    </div>
  </section>
</div>
