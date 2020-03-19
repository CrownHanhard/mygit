## MVVM模式的基本理念

------

View的变化会自动更新到ViewModel , ViewModel的变化也会自动同步到View上显示。这种自动同步是因为ViewModel中的属性实现了Observer( 观察者模式 )，当属性变更时都能触发对应的操作. 

## MVVM的简易示例

------

1. Vue采用数据劫持&发布-订阅模式的方式，通过ES5提供的 Object.defineProperty() 方法来劫持（监控）各属性的 getter 、setter ，并在数据（对象）发生变动时通知订阅者，触发相应的监听回调。
2. 并且，由于是在不同的数据上触发同步，可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测。
3. 要实现Vue中的双向数据绑定，大致可以划分三个模块：Compile、Observer、Watcher

## MVVM模式的基本总结

------

    1. 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
    2. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
    3. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
    4. 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。
      