---
title: 渲染
sidebar_position: 2
---

VL.Stride 提供了两种渲染的工作流程：
- **高阶渲染**：你将使用模型，灯光，材质，贴图等等（实体-组件-系统）
- **底层渲染**：你将直接使用绘制调用（draw call），管线状态，GPU资源等等

如果你之前常使用游戏引擎，那你已经很熟悉高阶渲染流程了。如果你从vvvv beta而来，而且你已经已经熟悉DX9/DX11，那你已经很熟悉底层渲染流程了。

这两种工作流程可以组合起来没有任何缺点，并且都可以渲染到纹理或输出窗口中。您也可以为两者编写着色器。

## 高阶渲染（场景）

通常被理解为实体-组件-系统（ECS）的结构流程。下面的图例展示包含实体的场景的树状图。

![](https://thegraybook.vvvv.org/images/libraries/3d/stride_ecs.svg)

每一个实体（Entity）都带有一个组件的序列，组件定义了实体的行为以及功能。任何一个实体也可以包含一个子实体的序列。

![](https://thegraybook.vvvv.org/images/libraries/3d/stride_entity.svg)

每一个实体都含有一个``TransformComponent``。子实体则会将自己的位移与父实体的位置相乘。

建立这样一个场景，你可以使用在``[Stride]``目录里的``Group``或者``Group(Spectral)``节点。该节点在技术上只是将输入的实体变成一个子实体。

### 根节点

``SceneWindow``和``SceneTexture``这两个节点都能搭建出一个场景系统。把``RootScene``节点连接上任何一个，你就可以从这里开始搭建你的场景。

参考帮助草图：``Overview Scene Graph Basics``,``Overview Scene Graph Advanced``,以及``Work with Children``。

### 摄像机

``SceneWindow``节点内部集成了一个默认的摄像机，用户可以用鼠标来控制这个相机，在场景查看。如果在Camera的针脚上连接上别的Camera的节点，默认的摄像机将会被覆盖掉。

如果要建立你自己的摄像机，你可以使用Entity节点并连接一个``CameraComponent``节点，或者使用一个``Camera``节点（就包括了上述提到的两个节点）来实现。帮助文档中有一些关于相机的例子可以参考。

### 模型

查看 模型与多边形网格

### 灯光

一个灯光的组件可以连接到任何实体节点上，这样灯光就会使用该实体的位移信息。帮助文档中专门介绍灯光的部分，其中有很多例子。

同时也请查看：[Stride Lights and Shadows doc](https://doc.stride3d.net/latest/en/manual/graphics/lights-and-shadows/index.html)

## 后期效果

Stride的渲染管线提供很多实时的后期效果你可以添加到3D场景中。例如环境光遮蔽（ambient occlusion）效果，高光效果（Bloom），以及其他基于空间或者图片的效果。

在帮助文档中有``PostFX``的章节，其中有很多的帮助文档。

同时也请查看：[Stride Post Effects doc](https://doc.stride3d.net/latest/en/manual/graphics/post-effects/index.html)

## 底层渲染（自定义渲染）