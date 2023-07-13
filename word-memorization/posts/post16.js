
const post = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현5</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-06</span>
    <span class="modification-date">수정일 : 2023-07-06💛</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B052 자료 구조</mark>
    <br><mark>C053 트리(Tree)</mark>
    <br><mark>A054 이진 트리</mark>
    <br><mark>A055 정렬</mark>
</p>
<hr>


<article id="💛sub1">
    <h2 class="sub-title"><b class="red">052</b></h2>
    <ul>
        <li><button type="button">자료구조</button><br/>
            <ul>
                <li>자료를&nbsp기억장치의&nbsp공간&nbsp내에&nbsp저장하는&nbsp방법과&nbsp자료&nbsp간의&nbsp관게,&nbsp처리&nbsp방법&nbsp등을&nbsp연구&nbsp분석하는&nbsp것을&nbsp말함</li>
                <li>저장&nbsp공간의&nbsp효율성과&nbsp실행시간의&nbsp단축을&nbsp위해&nbsp사용함</li>
                <li>분류
                    <ul>
                        <li><button type="button" class="red">선형&nbsp구조</button>(<button type="button">Linear&nbspStructure</button>)
                            <ul>
                                <li><button type="button">배열(Array)</button>
                                    <ul>
                                        <li><b>크기와&nbsp형(Type)이&nbsp동일한&nbsp자료들이&nbsp순서대로&nbsp나열된&nbsp자료의&nbsp집합</b></li>
                                        <li>반복적인&nbsp데이터&nbsp처리&nbsp작업에&nbsp적합한&nbsp구조</li>
                                        <li>정적인&nbsp자료구조,&nbsp기억장소의&nbsp추가가&nbsp어려움</li>
                                        <li>데이터&nbsp삭제&nbsp시&nbsp기억장소가&nbsp빈&nbsp공간으로&nbsp남아있어&nbsp메모리의&nbsp낭비가&nbsp발생함</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><button type="button">선형&nbsp리스트(Linear&nbspList)</button>
                    <ul>
                        <li>
                            <mark class="block">
                                <button type="button">연속&nbsp리스트(Contiguous&nbspList)</button>
                                <ul>
                                    <li>배열과&nbsp같이&nbsp<b>연속되는&nbsp기억장소에&nbsp저장되는&nbsp자료&nbsp구조</b></li>
                                    <li>중간에&nbsp데이터를&nbsp삽입하기&nbsp위해서는&nbsp연속된&nbsp빈&nbsp공간이&nbsp있어야함</li>
                                    <li>삽입·삭제&nbsp시&nbsp자료의&nbsp이동이&nbsp필요함</li>
                                </ul>
                            </mark>
                        </li>
                        <li>
                            <mark class="block">
                                <button type="button">연결&nbsp리스트(Linked&nbspList)</button>
                                <ul>
                                    <li><b>자료들을&nbsp임의의&nbsp기억공간에&nbsp기억시키되,</b>&nbsp자료&nbsp항목의&nbsp순서에&nbsp따라&nbsp<b><button type="button" class="not-hidden">노드의&nbsp포인터&nbsp부분</button>을&nbsp이용하여&nbsp서로&nbsp연결시킨&nbsp자료&nbsp구조</b>
                                    <ul>
                                        <li>연결을&nbsp위한&nbsp<button type="button" class="not-hidden">링크(포인터)&nbsp부분</button>이&nbsp필요하기&nbsp때문에&nbsp기억&nbsp공간의&nbsp이용&nbsp효율이&nbsp좋지&nbsp않음</li>
                                        <li>접근&nbsp속도&nbsp느림,&nbsp연결&nbsp끊어지면&nbsp다음&nbsp노드&nbsp찾기&nbsp어려움</li>
                                    </ul>
                                </ul>
                            </mark>
                        </li>
                    </ul>
                <li><button type="button">스택(Stack)</button>
                    <ul>
                        <li><b>리스트의&nbsp한쪽&nbsp끝으로만&nbsp자료의&nbsp삽입,&nbsp삭제&nbsp작업이&nbsp이루어지는&nbsp자료&nbsp구조</b></li>
                        <li><button type="button" class="not-hidden">후입선출(LIFO)</button>&nbsp방식으로&nbsp자료를&nbsp처리함</li>
                        <li>저장할&nbsp기억&nbsp공간이&nbsp없는&nbsp상태에서&nbsp데이터가&nbsp삽입되면&nbsp<button type="button" class="red">오버플로(Overflow</button>&nbsp발생</li>
                        <li>삭제할&nbsp데이터가&nbsp없는&nbsp상태에서&nbsp데이터를&nbsp삭제하면&nbsp<button type="button" class="red">언더플로(Underflow)</button>&nbsp발생</li>
                        <li>삽입:&nbspPUSH,&nbsp삭제:&nbspPOP</li></ul><li><button type="button">큐(Queue)</button>
                            <ul>
                                <li><b>리스트의&nbsp한쪽에서는&nbsp삽입,&nbsp다른&nbsp한쪽에서는&nbsp삭제&nbsp작업이&nbsp이루어지는&nbsp자료&nbsp구조</b></li>
                                <li><button type="button" class="not-hidden">선입선출(FIFO)</button>방식으로&nbsp처리</li>
                                <li>시작을&nbsp표시하는&nbsp<button type="button" class="red">프런트(Front)&nbsp포인터</button>와&nbsp끝을&nbsp표시하는&nbsp<button type="button" class="red">리어(Rear)&nbsp포인터</button>가&nbsp있음</li>
                            </ul>
                        <li><button type="button">데크(Deque)</button></li>
                    </ul>
                <li><button type="button" class="red">비선형&nbsp구조</button>(<button type="button">Non-Linear&nbspStructure</button>)
                    <ul>
                        <li><button type="button">그래프(Graph)</button>
                            <ul>
                                <li>정점(Vertex)과&nbsp간선(Edge)의&nbsp두&nbsp집합으로&nbsp이루어지는&nbsp자료&nbsp구조</li>
                                <li>&nbsp간선의&nbsp방향성&nbsp유무에&nbsp따라&nbsp<button type="button">방향그래프</button>,&nbsp<button type="button">무방향&nbsp그래프</button>로&nbsp구분됨
                                <ul>
                                    <li>방향&nbsp그래프&nbsp최대&nbsp간선&nbsp수&nbsp:&nbsp<mark>n(n-1)</mark></li>
                                    <li>무방향&nbsp그래프&nbsp최대&nbsp간선&nbsp수&nbsp:&nbsp<mark>n(n-1)/2</mark></li>
                                </ul>
                            </ul>
                        <li><button type="button">트리(Tree)</button>&nbsp:&nbsp사이클이&nbsp없는&nbsp그래프<br/></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">053</h2>
    <ul>
        <li><button type="button">트리</button>
            <ul>
                <li><button type="button">정점(Node,&nbsp노드)</button>과&nbsp<button type="button">선분(Branch,&nbsp가지)</button>을&nbsp이용하여&nbsp사이클을&nbsp이루지&nbsp않도록&nbsp구성한&nbsp<button type="button" class="not-hidden">그래프(Graph)</button>의&nbsp특수한&nbsp형태
                <li>&nbsp<button type="button" class="not-hidden">노드(Node)</button>&nbsp:&nbsp하나의&nbsp기억&nbsp공간</li>
                <li><button type="button" class="not-hidden">링크(Link)</button>&nbsp:&nbsp노드와&nbsp노드를&nbsp연결하는&nbsp선</li>
                <li><b>관련&nbsp용어</b>
                    <ul>
                        <li><button type="button">노드(Node)</button>&nbsp:&nbsp트리의&nbsp기본&nbsp요소로서&nbsp자료&nbsp항목과&nbsp다른&nbspㅎ아목에&nbsp대한&nbsp가지(Branch)를&nbsp합친&nbsp것</li>
                        <li><button type="button">근&nbsp노드(Root&nbspNode)</button>&nbsp:&nbsp트리의&nbsp맨&nbsp위에&nbsp있는&nbsp노드</li>
                        <li><button type="button">디그리(Degree,&nbsp차수</button>&nbsp:&nbsp각&nbsp노드에서&nbsp뻗어나온&nbsp가지의&nbsp수</li>
                        <li><button type="button">단말&nbsp노그(Terminal&nbspNode)</button>&nbsp=&nbsp<button type="button">잎&nbsp노드(Leaf&nbspNode)</button>&nbsp:&nbsp자식이&nbsp하나도&nbsp없는&nbsp노드,&nbsp즉&nbspDegree가&nbsp0인&nbsp노드&nbsp</li>
                        <li><button type="button">비단말&nbsp노드(Non-Terminal&nbspNode)</button>&nbsp:&nbsp자식이&nbsp하나라도&nbsp있는&nbsp노드,&nbsp즉&nbspDegree가&nbsp0이&nbsp아닌&nbsp노드</li>
                        <li><button type="button">조상&nbsp노드(Ancestors&nbspNode)</button>&nbsp:&nbsp임의의&nbsp노드에서&nbsp근&nbsp노드에&nbsp이르는&nbsp경로상에&nbsp있는&nbsp노드들</li>
                        <li><button type="button">자식&nbsp노드(Son&nbspNode)</button>&nbsp:&nbsp어떤&nbsp노드에&nbsp연결된&nbsp다음&nbsp레벨의&nbsp노드들</li>
                        <li><button type="button">부모&nbsp노드(Parent&nbspNode)</button>&nbsp:&nbsp어떤&nbsp노드에&nbsp연결된&nbsp이전&nbsp레벨의&nbsp노드들</li>
                        <li><button type="button">형제&nbsp노드(Brother&nbspNode,&nbspSibling</button>&nbsp:&nbsp동일한&nbsp부모를&nbsp갖는&nbsp노드들</li>
                        <li><button type="button">Level</button>&nbsp근&nbsp노드의&nbspLevel을&nbsp1로&nbsp가정한&nbsp후&nbsp<span class="exam">어떤&nbspLevel이&nbspL이면&nbsp자식&nbsp노드는&nbspL+1</span></li>
                        <li><button type="button">깊이(Depth,&nbspHeight</button>&nbsp:&nbspTree에서&nbsp노드가&nbsp가질&nbsp수&nbsp있는&nbsp최대&nbsp레벨</li>
                        <li><button type="button">숲(Forest)</button>&nbsp:&nbsp여러&nbsp개의&nbsp트리가&nbsp모여있는&nbsp것</li>
                        <li><button type="button">트리의&nbsp디그리</button>&nbsp:&nbsp노드들의&nbsp디그리&nbsp중에서&nbsp가장&nbsp많은&nbsp수</li>
                        <li><span class="exam">235p&nbsp예제&nbsp참고</span></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<!-- 아티클 복사 탬플릿 -->
<article id="💛sub2">
    <h2 class="sub-title">053</h2>
    <ul>
        <li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
            <ul>

            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</article>
<hr>

<!-- 내부 복사 탬플릿 -->
<li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
    <ul>

    </ul>
</li>

<!-- 복사 요소 -->
<button type="button">💛단어</button>
<button type="button" class="red">💛단어</button>
<button type="button" class="not-hidden">💛단어</button>

<button class="code">
    <span class="comment">/* 주석 */</span>
    <br>code <span class="text">텍스트</span> <span class="point">강조</span>
</button>
<hr>

<article id="sub2💛">
    <h2 class="sub-title">💛구현된 UI 복사해서 써!</h2>
    <article id="sub2-1💛">
        <h3>💛</h3>
        <ul>
            <li>
                <span class="red">🧡붉은 색 글자</span>
            </li>
            <li>
                <mark>💛단어만 마크할 수 도 있고</mark>
            </li>
            <li>
                <mark class="block">
                💛블록 단위로 마크할 수도 있습니다.
                </mark>
            </li>
            <li>
                <span class="exam">💚ex)문장</span>
            </li>
                <span class="exam block exam-tag">
                💚블록 단위 예시, '.exam-tag'클래스 유무로 'ex)'를 추가/제거 할 수 있습니다
                </span>
            </li>
        </ul>
    </article>
</article>
`;

export default post;