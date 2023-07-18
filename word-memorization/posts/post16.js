
const post = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현5</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-06</span>
    <span class="modification-date">수정일 : 2023-07-10</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B052 자료 구조</mark>
    <br><mark>C053 트리(Tree)</mark>
    <br><mark>A054 이진 트리</mark>
    <br><mark>A055 정렬</mark>
    <br><mark>기억상자 내용보충</mark>
</p>
<hr>

<article id="sub1">
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
<article id="sub3">
    <h2 class="sub-title"><b class="red">054</b></h2>
    <ul>
    <li><button type="button">이진 트리</button>
    <ul>
        <li>차수가 2이하인 노드들로 구성된 트리(자식이 둘 이하)<li>이진 트리의 레벨 i에서 최대 노드의 수는 2^(i-1)</li>
        <li>이진 트리에서 <button type="button" class="not-hidden">Terminal Node(단말노드)</button> 수가 n0, <button type="button" class="not-hidden">차수가 2인 노드</button> 수가 n2라 할때 n0 = n2 +1<br/></li></ul></li><li>트리의 운행법(Traversal)
            <ul>
                <li>산술식의 표기법과 연관성을 가짐</li>
                <li><button type="button">Preorder 운행법</button>
                    <ul>
                        <li><button type="button" class="red">Root</button> -> <button type="button" class="not-hidden">left</button> → <button type="button" class="not-hidden">right</button></li>
                    </ul>
                </li>
                <li><button type="button">Inorder 운행법</button>
                    <ul>
                        <li><button type="button" class="not-hidden">left</button> → <button type="button" class="red">Root</button> -> <button type="button" class="not-hidden">right</button></li>
                    </ul>
                </li>
                <li><button type="button">Postorder 운행법</button>
                    <ul>
                        <li><button type="button" class="not-hidden">left</button> → <button type="button" class="not-hidden">right</button> -><button type="button" class="red">Root</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>수식의 표기법
            <ul>
                <li>이진 트리로 만들어진 수식을 운행하면 각 전위, 중위, 후위 표기법이됨</li>
                <li><button type="button">전위 표기법</button> (<button type="button">PreFix</button>)
                    <ul>
                        <li><button type="button" class="red">연산자</button> -> <button type="button" class="not-hidden">left</button> → <button type="button" class="not-hidden">right</button></li>
                    </ul>
                </li>
                <li><button type="button">중위 표기법</button> (<button type="button">InFix</button>)
                    <ul>
                        <li><button type="button" class="not-hidden">left</button> → <button type="button" class="red">연산자</button> -> <button type="button" class="not-hidden">right</button></li>
                    </ul>
                </li>
                <li><button type="button">후위 표기법</button> (<button type="button">PostFix</button>)
                    <ul>
                        <li><button type="button" class="not-hidden">left</button> → <button type="button" class="not-hidden">right</button> -><button type="button" class="red">연산자</button><br/></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">055</b></h2>
    <ul>
        <li><button type="button" class="red">삽입 정렬</button>(<button type="button">Insertion Sort</button>)⭐
            <ul>
                <li>가장 간단한 정렬방식 <b>이미 순서화된 파일에 새로운 하나의 레코드를 순서에 맞게 삽입시켜 정렬하는 방식</b></li>
                <li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(n^2)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">선택 정렬</button>(<button type="button">Selection Sort</button>)⭐
            <ul><li>n개의 레코드 중 <b>최소값을 찾아 첫번째 레코드에 놓고,</b><br> 나머지 (n-1)개 중 <b>최소값을 찾아 두번째 레코드 위치에 놓는 방식 반복</b></li>
                <li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(n^2)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">버블 정렬</button>(<button type="button">Bubble Sort</button>)⭐
            <ul>
                <li> <b>인접한 두 개의 레코드 키 값을 비교하여 그 크기에 따라 레코드 위치를 서로 교환하는 정렬 방식</b></li>
                <li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(n^2)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">쉘 정렬</button>(<button type="button">Shell Short</button>)
            <ul>
                <li> 입력 파일을<b>어떤 매개변수의 값으로 서브 파일을 구성하고, 각 서브 파일을 Insertion 정렬 방식으로 순서 배열하는 과정을 반복하는 정렬방식</b></li>
                <li><button type="button" class="not-hidden">삽입 정렬(Insertion Sort)</button>을 확장한 개념</li>
                <li>수행 시간 복잡도 : <mark>평균 O(n^1.5), 최악 O(n^2)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">퀵 정렬</button>(<button type="button">Quick Sort</button>)
            <ul>
                <li> <b>키를 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽 서브 파일에 분해시키는 과정을 반복하는 정렬 방식</b></li>
                <li>레코드의 많은 자료이동을 없애고, 하나의 파일을 부분적으로 나누어 가면서 정렬함</li>
                <li>수행 시간 복잡도 : <mark>평균 O(nlog2n), 최악 O(n^2)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">힙 정렬</button>(<button type="button">Heap Sort</button>)
            <ul>
                <li> <b>전이진 트리를 이용한 정렬 방식</b></li>
                <li>구성된 <button type="button" class="not-hidden">전이진 트리(Complete Binary Tree)</button>를 Heap Tree로 변환하여 정렬</li>
                <li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(nlog2n)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">2-Way 합병 정렬</button>(<button type="button">Merge Sort</button>)⭐
            <ul>
                <li> <b>이미 정렬되어 있는 두 개의 파일을 한 개의 파일로 합병하는 정렬 방식</b></li>
                li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(nlog2n)</mark></li>
            </ul>
        </li>
        <li><button type="button" class="red">기수 정렬</button>(<button type="button">Radix Sort</button>) = (<button type="button">Bucket Sort</button>)
            <ul>
                <li> <b><button type="button" class="not-hidden">Queue</button>를 이용하여 자릿수(Digit)별로 정렬하는 방식</b></li>
                <li>레코드의 키 값을 분석하여 같은 수 또는 같은 문자끼리 그 순서에 맞는 버킷에 분배하였다가 버킷의 순서대로 레코드를 꺼내어 정렬함</li>
                <li>수행 시간 복잡도 : <mark>평균, 최악 모두 O(dn)</mark></li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">기억상자 내용보충</b></h2>
    <ul><li>7.2 098 : 결함 추적 순서<ul><li> <b>오류관리 목록</b><ul><li><b>오류상태</b> : 오류 데이터를 분석하여 확인할 수 있음</li><li><button type="button">Open</button> : 오류가 보고만 되고 분석되지 않은 상태</li><li><button type="button">Reviewed</button> : 등록된 오류를 담당자와 검토하는 상태</li><li><button type="button">Assigned</button> : 오류의 영향 분석 및 수정을 위해 개발자에게 오류를 전달한 상태</li><li><button type="button">Fixed</button> : 개발자가 오류를 수정한 상태</li><li><button type="button">Deferred</button> : 오류 수정을 연기한 상태</li><li><button type="button">Closed</button> : 수정된 오류 테스트 후 오류가 발견되지 않은 상태</li><li><button type="button">Classified</button> : 보고된 오류를 관련자들이 확인했을 때 오류가 아니라고 확인된 상태<br/></li></ul></li></ul></li><li><button type="button">외부 테이블</button> : DB에서 일반 테이블처럼 이용할 수 있는 외부 파일. DB내 객체로 존재</li><li><button type="button">임시 테이블</button> : 트랜잭션이나 세션별로 데이터를 저장하고 처리할 수 있는 테이블<br/></li><li><button type="button" class="red">배타 관계</button> : 개체 속성·구분자 기준으로 개체의 특성 분할 관계<br/></li><li><b>물리데이터의 품질 기준</b><ul><li><button type="button">최신성</button> : 최근의 이슈나 현행 시스템을 반영하고 있음</li><li><button type="button">준거성</button> : 데이터 표준, 표준화 규칙, 법적 요건들을 정확히 준수함</li><li><button type="button">정확성</button> : 데이터 모델이 요구사항이나 업무 규칙, 표기법에 따라 정확하게 표현됨</li><li><button type="button">일관성</button> : 데이터 모델이 표현상의 일관성을 유지하고 있음</li></ul></li><li><b>검증</b><ul><li><button type="button" class="red">데이터 검증</button> : 원천 시스템의 데이터를 목록 시스템의 데이터로 생성하는 과정이 정상적으로 수행되었는지 여부 확인 과정</li><li><button type="button" class="red">응용 데이터 검증</button> : 사전에 정의된 업무규칙을 기준으로 데이터 전환의 정합성 검증</li><li><button type="button" class="red">응용 프로그램 검증</button> : 응용 프로그램을 통한 데이터 전환 정합성 검증</li><li><button type="button" class="red">데이터 정제요청서</button> : 원청 데이터 정제·전환 프로그램의 수정을 위해 요청사항·조치사항 등 문서 작성</li><li><button type="button" class="red">데이터 정제보고서</button> : 정제요청서를 통해 정상 정제 되었는지 확인한 결과 문서 작성</li></ul></li><li><b>식별자</b><ul><li><button type="button" class="red">주 식별자</button><ul><li><b>4가지 특징</b><ul><li><button type="button">유일성</button> : 유일하게 구분함</li><li><button type="button">최소성</button></li><li><button type="button">불변성</button> : 한번 지정되면 변하지 않음</li><li><button type="button">존재성</button> : 반드시 데이터 존재</li></ul></li></ul></li><li><button type="button" class="red">보조 식별자</button></li><li><button type="button" class="red">대리 식별자</button> = <button type="button">인조 식별자</button> = 속성 2개 이상을 1개의 속성으로 묶어 사용</li><li><button type="button" class="red">원조 식별자</button> = <button type="button">본질 식별자</button> = 가공하지않은 원래 식별자</li></ul></li><li>2.4 048 <b>접근통제 3요소</b><ul><li><button type="button">접근통제 정책</button></li><li><button type="button">접근통제 매커니즘</button></li><li><button type="button">접근통제 보안모델</button></li></ul></li></ul>
</article>
`;

export default post;