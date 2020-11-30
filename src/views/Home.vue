<template>
  <div id="demo">
    <div class="box">
      <!-- tab -->
      <div class="tabul">
        <ul>
          <!--横向父级选项卡-->
          <li :class="currentId==index?'active':' '"
              v-for="(item, index) in lists"
              :key="index"
              @click='handle(index)'>{{item.tabname}}</li>
        </ul>
      </div>
      <div class="tableft">
        <!--纵向子级选项卡-->
        <ul :class="currentId == index ?'isShow':'hidden'"
            v-for="(item, index) in lists"
            :key="index">
          <li :class="currentID2 == index ?'active1':' '"
              v-for="(itemc, index) in item.tabchild"
              :key="itemc.id"
              @click='handleChild(index)'>
            {{itemc.tagname}}
          </li>
        </ul>
      </div>
      <!-- tabcont -->
      <!--子级内容-->
      <div class="tabcont"
           :class="currentID2 == index ? 'isShow':'hidden' "
           v-for="(item, index) in lists"
           :key="index">
        <div class="tabcontent"
             :id="index"
             :class="currentID2 == index ?'isShow':''"
             v-for="(itemc, index) in item.tabchild"
             :key="itemc.id">
          {{itemc.tabcont}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      currentId: 0,
      currentID2: 0,
      lists: [ //准备的假数据
        {
          id: 1,
          tabname: 'tab1',
          tabchild: [
            {
              id: 1,
              tagname: 'tab1child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab1child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab1child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 4,
              tagname: 'tab1child4',
              tabcont: '4loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 5,
              tagname: 'tab1child5',
              tabcont: '5loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        },
        {
          id: 2,
          tabname: 'tab2',
          tabchild: [
            {
              id: 1,
              tagname: 'tab2child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab2child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab2child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 4,
              tagname: 'tab2child4',
              tabcont: '4loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 5,
              tagname: 'tab2child5',
              tabcont: '5loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        },
        {
          id: 3,
          tabname: 'tab3',
          tabchild: [
            {
              id: 1,
              tagname: 'tab3child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab3child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab3child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        },
        {
          id: 4,
          tabname: 'tab4',
          tabchild: [
            {
              id: 1,
              tagname: 'tab4child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab4child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab4child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 4,
              tagname: 'tab4child4',
              tabcont: '4loremloremloremloremloremloremloremloremloremlorem'
            }

          ]
        },
        {
          id: 5,
          tabname: 'tab5',
          tabchild: [
            {
              id: 1,
              tagname: 'tab5child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab5child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab5child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 4,
              tagname: 'tab5child4',
              tabcont: '4loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 5,
              tagname: 'tab5child5',
              tabcont: '5loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        },
        {
          id: 6,
          tabname: 'tab6',
          tabchild: [
            {
              id: 1,
              tagname: 'tab6child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        },
        {
          id: 7,
          tabname: 'tab7',
          tabchild: [
            {
              id: 1,
              tagname: 'tab7child1',
              tabcont: '1loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 2,
              tagname: 'tab7child2',
              tabcont: '2loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 3,
              tagname: 'tab7child3',
              tabcont: '3loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 4,
              tagname: 'tab7child4',
              tabcont: '4loremloremloremloremloremloremloremloremloremlorem'
            },
            {
              id: 5,
              tagname: 'tab7child5',
              tabcont: '5loremloremloremloremloremloremloremloremloremlorem'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handle: function (index) {
      this.currentId = index
    },
    handleChild: function (index) {
      this.currentID2 = index
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabul {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.tabul ul {
  list-style: none;
  background-color: rgb(57, 57, 219);
}
.tabul ul li {
  display: inline-block;
  padding: 0 20px;
  height: 65px;
  line-height: 65px;
  color: #ffffff;
  cursor: pointer;
}
.tabul ul li:hover {
  background-color: darkblue;
}
.active {
  background-color: darkblue;
}
.active1 {
  background-color: aquamarine;
}
.tabcont {
  padding: 20px;
  position: absolute;
  left: 220px;
  top: 65px;
  right: 0;
  z-index: 100;
}
.tabcontent {
  display: none;
}
.tableft {
  width: 220px;
  position: fixed;
  bottom: 0;
  top: 65px;
  left: 0;
  background-color: darkcyan;
  z-index: 99;
}
.tableft ul {
  list-style: none;
  overflow-y: auto;
}
.tableft ul li {
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding: 0 15px;
  color: #ffffff;
}
.tableft ul li span {
  display: block;
}
.isShow {
  display: block;
}
.hidden {
  display: none;
}
</style>